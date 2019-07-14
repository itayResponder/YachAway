import yachtService from '@/services/yacht.service';

export default {
    state: {
        yachts: []
    },

    mutations: {
        setYachts(state, context) {
            state.yachts = context.yachts;
        },

        updateYacht({ yachts }, {savedYacht}) {
            const idx = yachts.findIndex(currYacht => currYacht._id === savedYacht._id);
            yachts.splice(idx, 1, savedYacht);
        },

        addNewYacht({ yachts }, { savedYacht }) {
            yachts.unshift(savedYacht);
        },

        removeYacht({ yachts }, { yachtId }) {
            const idx = yachts.findIndex(yacht => yacht._id === yachtId);
            yachts.splice(idx, 1);
        },
    },

    getters: {
        yachtsToShow({ yachts }) {
            return yachts;
        }
    },

    actions: {
        async loadYachts({commit}) {
            try {
                var yachts = await yachtService.query()
                commit({ type: "setYachts", yachts })
                return yachts;
            } catch {
                console.log("Could not find yachts");
            }
        },

        async getYachtById(context,  {yachtId} ) {
            try {
                var yacht = await yachtService.getById(yachtId)
                return yacht;
            } catch {
                console.log('YachtStore getById Could not find yacht')
            }
        },

        async removeYacht({commit}, { yachtId }) {
            try {
                await yachtService.remove(yachtId)
                commit({type: 'removeYacht', yachtId})
            } catch {
                console.log('Could not delete yacht')
            }
        },

        async saveYacht({commit}, { yacht }) {
            try {
                var savedYacht;
                if (yacht._id) {
                    savedYacht = await yachtService.save(yacht)
                    commit({ type: 'updateYacht', savedYacht })
                } else {
                    savedYacht = await yachtService.save(yacht)
                    commit({ type: 'addNewYacht', savedYacht })
                }
                return savedYacht;
            } catch (err) {
                console.log('Could not save yacht err:', err)
            }
        }
    }
}
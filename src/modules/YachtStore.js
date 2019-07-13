import yachtService from '@/services/yacht.service';

export default {
    state: {
        yachts: []
    },

    mutations: {
        setYachts(state, context) {
            state.yachts = context.yachts;
        },

        updateYacht({ yachts }, {saveYacht}) {
            const idx = yachts.findIndex(currYacht => currYacht._id === saveYacht._id);
            yachts.splice(idx, 1, saveYacht);
        },

        addNewYacht({ yachts }, { saveYacht }) {
            yachts.unshift(saveYacht);
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
                var saveYacht;
                if (yacht._id) {
                    saveYacht = await yachtService.save(yacht)
                    commit({ type: 'updateYacht', saveYacht })
                } else {
                    console.log('yachtStore add new yacht:', yacht)
                    saveYacht = await yachtService.save(yacht)
                    commit({ type: 'addNewYacht', saveYacht })
                }
                return saveYacht;
            } catch (err) {
                console.log('Could not save yacht err:', err)
            }
        }
    }
}
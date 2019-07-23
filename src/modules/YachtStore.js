import yachtService from '@/services/yacht.service';

export default {
    state: {
        yachts: [],
        yacht: {},
        // filterBy: {
        //     category: '',
        //     txt: '',
        //     minPeople: '',
        //     facilities: [],
        //     sort: '',
        //     owner:null
        // },
    },

    mutations: {
        // setFilter(state, filter) {
        //     state.filterBy = filter
        // },
        setYachts(state, context) {
            state.yachts = context.yachts;
        },

        setYacht(state, context) {
            state.yacht = context.yacht;
        },

        updateYacht({ yachts }, { savedYacht }) {
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
        yachtsToShow({yachts}) {
            return yachts
        },
        getyacht({ yacht }) {
            return yacht;
        }
    },

    actions: {
        async loadYachts({ commit }, { filterBy }) {
            try {
                const yachts = await yachtService.query(filterBy)
                commit({ type: "setYachts", yachts })
                return yachts;
            } catch (err) {
                console.log("Could not find yachts  error:", err);
                return err;
            }
        },

        async loadYacht({ commit }, { yachtId }) {
            try {
                const yacht = await yachtService.getById(yachtId)
                commit({ type: 'setYacht', yacht })
                return yacht;
            } catch (err) {
                console.log('Could not find yacht byId error:', err)
            }
        },

        async getYachtById(context, { yachtId }) {
            try {
                const yacht = await yachtService.getById(yachtId)
                return yacht;
            } catch (err) {
                console.log('YachtStore getById Could not find yacht error:', err)
                return err;
            }
        },

        async removeYacht({ commit }, { yachtId }) {
            try {
                const yachtRemoved = await yachtService.remove(yachtId)
                commit({ type: 'removeYacht', yachtId })
                return yachtRemoved;
            } catch (err) {
                console.log('YachtStore removeYacht Could not remove yacht error:', err);
                return err;
            }
        },

        async saveYacht({ commit }, { yacht }) {
            try {
                let savedYacht;
                if (yacht._id) {
                    savedYacht = await yachtService.save(yacht)
                    commit({ type: 'updateYacht', savedYacht })
                } else {
                    savedYacht = await yachtService.save(yacht)
                    commit({ type: 'addNewYacht', savedYacht })
                }
                return savedYacht;
            } catch (err) {
                console.log('Could not save yacht err:', err);
                return err;
            }
        }
    }
}
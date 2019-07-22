import yachtService from '@/services/yacht.service';

export default {
    state: {
        yachts: [],
        yacht: {},
        filterBy: {
            category: '',
            txt: '',
            minPeople: '',
            facilities: [],
            sort: ''
        },
    },

    mutations: {
        setFilter(state, filter) {
            state.filterBy = filter
        },
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
        yachtsToShow(state) {
            var facilities = state.filterBy.facilities || []
            // console.log('facilities is ',facilities)
            var yachts = [...state.yachts]

            var txt
            if (!state.filterBy.txt || typeof state.filterBy.txt === "string") txt = "" 
            else txt = state.filterBy.txt.toLowerCase()

            var minPeople = state.filterBy.minPeople || ""

            if (!state.filterBy) return yachts
            else if (true)
                yachts = state.yachts.filter(yacht => {
                    return yacht.location.country.toLowerCase().includes(txt) && yacht.maxPeopleOnBoard >= minPeople && facilities.every(currFacil => yacht.facilities.includes(currFacil)) ||
                        yacht.location.city.toLowerCase().includes(txt) && yacht.maxPeopleOnBoard >= minPeople && facilities.every(currFacil => yacht.facilities.includes(currFacil))

                })
            if (state.filterBy.sort === 'name')
                yachts.sort(function (a, b) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                })
            else if (state.filterBy.sort === 'price')
                yachts.sort(function (a, b) {
                    if (a.pricePerNight < b.pricePerNight) { return 1; }
                    if (a.pricePerNight > b.pricePerNight) { return -1; }
                    return 0;
                })
            return yachts;
        },
        getyacht({ yacht }) {
            return yacht;
        }
    },

    actions: {
        async loadYachts({ commit }, { owner }) {
            try {
                const yachts = await yachtService.query(owner)
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
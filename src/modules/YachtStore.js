import yachtService from '@/services/yacht.service';

export default {
    state: {
        yachts: []
    },

    mutations: {
        setYachts(state, context) {
            state.yachts = context.yachts;
        },

        updateYacht({ yachts }, context) {
            const idx = yachts.findIndex(yacht => yacht._id === context.yacht._id);
            yachts.splice(idx, 1, context.yacht);
        },

        addNewYacht({ yachts }, { yacht }) {
            yachts.unshift(yacht);
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
        async loadYachts(context) {
            try {
                var yachts = await yachtService.query()
                context.commit({ type: "setYachts", yachts })
                return yachts;
            } catch {
                console.log("Could not find yachts");
            }
        },

        async getYachtById(context, { yachtId }) {
            try {
                var yacht = await yachtService.getById(yachtId)
                return yacht;
            } catch {
                console.log('Could not find yacht')
            }
        },

        async removeYacht(context, { yachtId }) {
            try {
                await yachtService.remove(yachtId)
            } catch {
                console.log('Could not delete yacht')
            }
        },

        async saveYacht(context, { yacht }) {
            try {
                var updatedYacht;
                if (yacht._id) {
                    yacht = await yachtService.save(yacht)
                    context.commit({ type: 'updateYacht', yacht })
                } else {
                    yacht = await yachtService.save(yacht)
                    context.commit({ type: 'addNewYacht', yacht })
                }
                return updatedYacht;
            } catch {
                console.log('Could not save yacht')
            }
        }
    }
}
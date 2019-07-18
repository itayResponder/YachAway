import reservationService from '@/services/reservation.service';


export default {
    state: {
        reservations: []
    },

    mutations: {
        setReservations(state, context) {
            state.reservations = context.reservations;
        },

        updateReservations(state, context) {
            state.reservations.push(context.reservation);
        },
    },
    getters: {
        reservationsToShow(state) {
            return state.reservations;
        }
    },
    actions: {
        async makeReservation({ commit }, { currReservation }) {
            try {
                const reservation = await reservationService.addReservation(currReservation)
                    commit({ type: 'updateReservations', reservation })
                    return reservation
            } catch (err) {
                console.log(`reservationStore makeReservation Could not make
                 reservation error:`, err);
                throw err
            }
        },
        async loadReservations({ commit }, { user }) {
            try {
                const reservations = await reservationService.query(user)
                commit({ type: 'setReservations', reservations })
                return reservations;

            } catch (err) {
                console.log(`reservationStore loadReservations Could not get reservations
                 error:`, err);
                throw err
            }
        }

    },
}
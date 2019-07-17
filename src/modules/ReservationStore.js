import reservationService from '@/services/reservation.service';


export default {
    state: {
        reservations: []
            //  reservations: reservationService.getResrvation()
            //  loggedInUser: userService.getLoggedInUser()
    },

    mutations: {
        setReservations(state, context) {
            state.reservations = context.reservations;
        },

        updateWantedReservation(state, context) {
            state.reservations.push(context.wantedReservation);
        },
    },
    getters: {
        reservationsToShow(state) {
            return state.reservations;
        }
    },
    actions: {
        async doReservation({ commit }, { wantedReservation }) {
            // console.log("do reservation store: ");
            try {
                console.log("do reservation store: ", wantedReservation);
                const proccessedRes = await reservationService.addReservation(wantedReservation)
                    // commit({ type: 'updateWantedReservation', proccessedRes })
            } catch (err) {
                console.log('some err');
                throw err
            }
        },
        async loadReservations({ commit }, { filterBy }) {
            try {
                const reservations = await reservationService.query(filterBy)
                commit({ type: 'setReservations', reservations })
                return reservations;

            } catch (err) {
                console.log('Had Problems:', err);
                throw err
            }
        }

    },
}
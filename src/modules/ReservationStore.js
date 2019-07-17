import reservationService from '@/services/reservation.service';


export default {
    state: {
        wantedReservation: null,
        //  loggedInUser: userService.getLoggedInUser()
    },

    mutations: {
        //  setUser(state, context) {
        //      state.loggedInUser = context.checkedUser
        //  }

        updateWantedReservation(state, context) {
            state.reservation = context.wantedReservation;
        },
    },
    actions: {
        doReservation({ commit }, { wantedReservation }) {
            // console.log("do reservation store: ");
            console.log("do reservation store: ", wantedReservation);
            reservationService.makeReservation(wantedReservation)
                // commit({ type: 'updateWantedReservation', wantedReservation })
        }

        //  async logout(context, { loggedUser }) {
        //      try {
        //          const loggedInUser = await userService.logout(loggedUser)
        //          context.commit({type: 'setUser', user: null})
        //          return loggedInUser;
        //      } catch (err) {
        //          console.log('error with logout err:', err);
        //          return err;
        //     }
        // }
    },
    getters: {
        //  userLoggedIn({ loggedInUser }) {
        //      return loggedInUser
        //  }
    }
}
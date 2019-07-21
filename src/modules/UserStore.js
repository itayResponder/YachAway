import userService from '../services/user.service'

export default {
    state: {
        userReservations: [],
        // likedYachts: [],
        loggedInUser: userService.getLoggedInUser() //0x123
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        },

        userReservations({ loggedInUser }) {
            return loggedInUser.reservations;
        },
    },
    mutations: {
        setOwnerReservations(state, context) {
            state.userReservations = context.updatedOwner.reservations
        },

        setUser(state, context) {
            state.loggedInUser = context.sessionUser;
        },

        setReservations(state, context) {
            state.userReservations = context.userReservations;
        }
    },
    actions: {
        async checkValidUser({ commit }, { user }) {
            var checkedUser;
            try {
                checkedUser = await userService.login(user)
                let sessionUser = checkedUser;
                if (sessionUser) {
                    commit({ type: 'setUser', sessionUser })
                    return sessionUser;
                }
            } catch (err) {
                console.log('error with checkValudUser err:', err);
                return err;
            }
        },

        async pendingReservation({ commit }, { reservation }) {
            try {
                const updatedOwner = await userService.sendReservationToOwner(reservation)
                commit({ type: 'setOwnerReservations', updatedOwner })
                return updatedOwner
            } catch (err) {
                console.log('userStore could not send msg to owner error:', err)
            }
        },

        async logout(context, { loggedUser }) {
            try {
                const loggedInUser = await userService.logout(loggedUser)
                context.commit({ type: 'setUser', loggedInUser: null })
                return loggedInUser;
            } catch (err) {
                console.log('error with logout err:', err);
                return err;
            }
        },

        async updateUserLikedYachts(context, { updateLikedYachts }) {
            try {
                updateLikedYachts.userId = context.state.loggedInUser._id;
                let sessionUser = await userService.updateUserLikedYachts(updateLikedYachts)
                context.commit({ type: 'setUser', sessionUser })
                sessionUser = await userService.setLoggedInUser(sessionUser)
                return sessionUser.likedYachts;
            } catch (err) {
                console.log('userStore could not update liked yachts to user error:', err)
            }
        }
    }
}
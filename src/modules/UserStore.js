import userService from '../services/user.service'

export default {
    state: {
        loggedInUser: userService.getLoggedInUser(),
        userReservations: []
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        },
        userReservations({ userReservations }) {
            return userReservations;
        }
    },
    mutations: {
        setOwnerReservations(state, context) {
            state.userReservations = context.updatedOwner.reservations
        },

        setUser(state, context) {
            state.loggedInUser = context.sessionUser;
        },

        setUserReservations(state, context) {
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
                throw err;
            }
        },

        async updateUserIsOwner({ commit }, { userId }) {
            try {
                let sessionUser = await userService.updateLoggedInUserIsOwner(userId)
                console.log('userStore updateIsOwner:', sessionUser)
                commit({type: 'setUser', sessionUser})
                sessionUser = await userService.setLoggedInUser(sessionUser)
                return sessionUser.isOwner;
            } catch (err) {
                console.log('Could not update user owner error:', err)

                throw err;
            }
        },

        async loadUserReservations({ commit }, { userId }) {
            try {
                const userReservations = await userService.loadUserReservations(userId)
                commit({ type: 'setUserReservations', userReservations })
                return userReservations;
            } catch (err) {
                console.log('Could not load user reservations error:', err)
                throw err;
            }
        },

        async replyUser(context, { replyUser }) {
            try {
                console.log('UserStore replyUser:', replyUser)
                const sendUserMsg = userService.replyUserMsg(replyUser)
                return sendUserMsg;
            } catch (err) {
                console.log('err', err);
                throw err;
            }
        },

        async pendingReservation({ commit }, { reservation }) {
            try {
                console.log('pendingreser reservation:', reservation)
                const updatedOwner = await userService.sendReservationToOwner(reservation)
                commit({ type: 'setOwnerReservations', updatedOwner })
                return updatedOwner
            } catch (err) {
                console.log('userStore could not send msg to owner error:', err)
                throw err;
            }
        },

        async logout(context, { loggedUser }) {
            try {
                const loggedInUser = await userService.logout(loggedUser)
                context.commit({ type: 'setUser', loggedInUser: null })
                return loggedInUser;
            } catch (err) {
                console.log('error with logout err:', err);
                throw err;
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
                throw err;
            }
        }
    }
}
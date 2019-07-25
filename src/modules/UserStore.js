import userService from '../services/user.service'

export default {
    state: {
        loggedInUser: userService.getLoggedInUser(),
        userReservations: [],
        userLikedYachts: [],
        userMsgs: [],
        ownerOrders: []
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        },
        userReservations({ userReservations }) {
            return userReservations;
        },
        userLikedYachts({userLikedYachts}) {
            return userLikedYachts;
        },
        userMsgs({userMsgs}) {
            return userMsgs;
        },
        userMsgsCount({userMsgs}) {
            return userMsgs ? userMsgs.length : 0;
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
        },
        setUserLikedYachts(state, context) {
            state.userLikedYachts = context.userLikedYachts;
        },
        setUserMsgs(state, context) {
            state.userMsgs = context.userMsgs;
        }
    },
    actions: {
        async loadUserMsgs({commit}, {userLoggedInId}) {
            try {
                const userMsgs = await userService.getLoggedInUserMsgs(userLoggedInId);
                commit({type: 'setUserMsgs', userMsgs})
            } catch (err) {
                console.log('userStore Could not get usermsgs error:', err)
            }
        },

        async signUp({commit}, {user}) {
            let sessionUser;
            try {
                sessionUser = await userService.signUp(user)
                commit({type: 'setUser', sessionUser})
                return sessionUser;
            } catch (err) {
                console.log('userStore Could not signUp err:', err);
                throw err;
            }
        },

        async login({ commit }, { user }) {
            let sessionUser;
            try {
                sessionUser = await userService.login(user)
                if (sessionUser) {
                    commit({ type: 'setUser', sessionUser })
                    return sessionUser;
                }
            } catch (err) {
                console.log('error with checkValudUser err:', err);
                throw err;
            }
        },

        async loadUserLikedYachts({commit}, {userId}) {
            try {
                let userLikedYachts = await userService.loadLikedYachts(userId)
                commit({type: 'setUserLikedYachts', userLikedYachts})
                return userLikedYachts;                
            } catch (err) {
                console.log('user store Could not load user liked yachts error:', err)
                throw err;
            }
        },

        async updateUserIsOwner({ commit }, { userId }) {
            try {
                let sessionUser = await userService.updateLoggedInUserIsOwner(userId)
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

        async replyToUserFromOwner(context, { replyToUserFromOwner }) {
            try {
                const sendUserMsg = userService.replyUserMsg(replyToUserFromOwner)
                return sendUserMsg;
            } catch (err) {
                console.log('err', err);
                throw err;
            }
        },

        async pendingReservation({ commit }, { reservation }) {
            try {
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

        async updateUserLikedYachts({commit}, { updateLikedYachts }) {
            try {
                let userLikedYachts = await userService.updateUserLikedYachts(updateLikedYachts)
                commit({ type: 'setUserLikedYachts', userLikedYachts })
                return userLikedYachts;
            } catch (err) {
                console.log('userStore could not update liked yachts to user error:', err)
                throw err;
            }
        }
    }
}
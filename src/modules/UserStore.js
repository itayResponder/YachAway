import userService from '../services/user.service'

export default {
    state: {
        userReservations: [],
        loggedInUser: userService.getLoggedInUser()
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        },
        userReservations({loggedInUser}) {
            return loggedInUser.reservations;
        }
    },
    mutations: {
        setOwnerReservations(state, context) {
            state.userReservations = context.updatedOwner.reservations
        },

        setUser(state, context) {
            state.loggedInUser = context.checkedUser
        }
    },
    actions: {
        async checkValidUser(context, { user }) {
            var checkedUser;
            try {
                checkedUser = await userService.login(user)
                if (checkedUser) {
                    context.commit({ type: 'setUser', checkedUser })
                }
                return checkedUser;
            } catch (err) {
                console.log('error with checkValudUser err:', err);
                return err;
            }
        },

        async pendingReservation({commit}, {reservation}) {
            try {
                const updatedOwner = await userService.sendReservationToOwner(reservation)
                console.log('userStore after reservation updatedOwner:', updatedOwner)
                commit({type: 'setOwnerReservations', updatedOwner})
                return updatedOwner
            } catch (err) {
                console.log('userStore could not send msg to owner error:',err)
            }
        },

        async logout(context, { loggedUser }) {
            try {
                const loggedInUser = await userService.logout(loggedUser)
                context.commit({ type: 'setUser', user: null })
                return loggedInUser;
            } catch (err) {
                console.log('error with logout err:', err);
                return err;
            }
        },

        async setLikedYacht(context, { likedYacht }) {
            const confirmedLike = await userService.addFavorite(likedYacht)
            try {
                console.log('in the store', likedYacht)
                return confirmedLike

            }
            catch (err) {
                console.log('error insert likedYacht')
            }

        }
    }
}
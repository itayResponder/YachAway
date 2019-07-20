import userService from '../services/user.service'

export default {
    state: {
        userReservations: [],
        likedYachts: [],
        loggedInUser: userService.getLoggedInUser()
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        },

        userReservations({ loggedInUser }) {
            return loggedInUser.reservations;
        },

        likedYachts({likedYachts}) {
            return likedYachts;
        }
    },
    mutations: {
        setOwnerReservations(state, context) {
            state.userReservations = context.updatedOwner.reservations
        },

        setUser(state, context) {
<<<<<<< HEAD
            state.loggedInUser = context.sessionUser;
        },
        setLikedYachts(state,context){
            state.likedYachts = context.likedYachts;
        },
        setReservations(state,context){
            state.userReservations = context.userReservations;
        }

=======
            state.loggedInUser = context.checkedUser
        },
>>>>>>> a4fae38658327b4d682de1f4a9f9dc45609aab06
    },
    actions: {
        async checkValidUser({commit}, { user }) {
            var checkedUser;
            try {
                checkedUser = await userService.login(user)
                let sessionUser = checkedUser[0];
                console.log('userStore after  checkedUser',checkedUser)
                if (sessionUser) {
                    console.log('in the iffff', sessionUser)
                    commit({ type: 'setUser', sessionUser })
                    let likedYachts = checkedUser[1];
                    commit({ type: 'setLikedYachts', likedYachts })
                    let userReservations = checkedUser[2];
                    commit({ type: 'setReservations', userReservations })
                    
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
<<<<<<< HEAD
                console.log('userStore after reservation updatedOwner:', updatedOwner)
                commit({ type: 'setOwnerReservations', updatedOwner })
=======
                commit({type: 'setOwnerReservations', updatedOwner})
>>>>>>> a4fae38658327b4d682de1f4a9f9dc45609aab06
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

        async setLikedYacht(context, { likedYacht }) {
            const confirmedLike = await userService.addFavorite(likedYacht)
            try {
                console.log('confirmedLike', confirmedLike)
                return confirmedLike
            }
            catch (err) {
                console.log('error liked yacht in the UserStore error = ', err)
            }

        }
    }
}
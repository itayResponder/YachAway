import userService from '../services/user.service'

export default {
    state: {
        userReservations: [],
        // likedYachts: [],
        loggedInUser: userService.getLoggedInUser()
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
                    // let likedYachts = checkedUser[1].userLikedYachts;
                    // commit({ type: 'setLikedYachts', likedYachts })
                    // let userReservations = checkedUser[2].userReservations;
                    // commit({ type: 'setReservations', userReservations })
                    return sessionUser;
                }
            } catch (err) {
                console.log('error with checkValudUser err:', err);
                return err;
            }
        },

        async updateUserLikedYachts(context, {updateLikedYachts}) {
            try {
                updateLikedYachts.userId = context.state.loggedInUser._id;
                let cpyUpdateLikedYachts = JSON.parse(JSON.stringify(updateLikedYachts));
                console.log('userStore updateUserLikedYachts cpyUpdateLikedYachts:', cpyUpdateLikedYachts)
                console.log('userStore checkedIfLikeExist',cpyUpdateLikedYachts)
                const sessionUser = await userService.updateUserLikedYachts(cpyUpdateLikedYachts)
                console.log('UserStore update: sessionUser:',sessionUser )
                context.commit({ type: 'setUser', sessionUser })
                return sessionUser.likedYachts;
            } catch (err) {
                console.log('userStore could not update liked yachts to user error:', err)
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

        async setLikedYacht({commit}, { likedYacht }) {
            let cpyLikedYachts = JSON.parse(JSON.stringify(likedYacht));
            console.log('userStore setLikedYacht cpyLikedYachts:', cpyLikedYachts)
            const sessionUser = await userService.addFavorite(cpyLikedYachts)
            try {
                console.log('sessionUser', sessionUser)
                commit({type: 'setUser', sessionUser})
                return sessionUser.likedYachts;
            }
            catch (err) {
                console.log('error liked yacht in the UserStore error = ', err)
            }

        }
    }
}
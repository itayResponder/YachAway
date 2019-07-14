import userService from '../services/user.service'

export default {
    state: {
        users: [],
        loggedInUser: userService.getLoggedInUser()
    },
    getters: {
        userLoggedIn({ loggedInUser }) {
            return loggedInUser
        }
    },
    mutations: {
        setUser(state, context) {
            state.loggedInUser = context.user
        }
    },
    actions: {
        async checkValidUser(context, { user }) {
            var checkedUser;
            try {
                checkedUser = await userService.login(user)
                if (checkedUser) {
                    context.commit({ type: 'setUser', user })
                }
                return checkedUser;
            } catch (err) {
                return err;
            }
        },
        async logout(context, { loggedUser }) {
            try {
                const loggedInUser = await userService.logout(loggedUser)
                context.commit.status.loggedInUser = null;
                return loggedInUser;
            } catch (err) {
                return err;
            }
        }
    }
}
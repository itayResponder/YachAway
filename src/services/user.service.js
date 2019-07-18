import httpService from './http.service';

export default {
    login,
    getLoggedInUser,
    logout,
    signUp,
    addFavorite
}

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

async function login(user) {
    const validUser = await httpService.post(_getUrl('login'), user)
    return _handleSuccessfulRegister(validUser)
}

async function signUp(user) {
    const validUser = await httpService.post(_getUrl('signup'), user)
    return _handleSuccessfulRegister(validUser);
}

async function logout() {
    await httpService.post(_getUrl('logout'))
    try {
        sessionStorage.clear()
        loggedInUser = null
    } catch (err) {
        throw err;
    }
}
async function addFavorite(likedYacht) {
    const updatedUser = await httpService.put(_getUrl(), likedYacht)
    try {
        return updatedUser
    } catch (err) {
        throw err;
    }
}

function getLoggedInUser() {
    return loggedInUser;
}

function _getUrl(userId = '') {
    return `user/${userId}`
}

function _handleSuccessfulRegister(user) {
    loggedInUser = user
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return loggedInUser;
}
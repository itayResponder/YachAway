import httpService from './http.service';

export default {
    login,
    getLoggedInUser,
    logout,
    signUp,
    addFavorite,
    sendReservationToOwner
}

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

async function login(user) {
    let validUser = await httpService.post(_getUrl('login'), user)
    console.log('validUser is ',validUser)
    const userLIkedYachts = validUser.likedYachts;
    const userReservations = validUser.reservations;
    delete validUser.reservations;
    delete validUser.likedYachts;

    validUser = _handleSuccessfulRegister(validUser)
    return [validUser, { userLIkedYachts }, { userReservations }]

}

async function addFavorite(likedYacht) {
    const updatedUser = await httpService.put(_getUrl(), likedYacht)
    try {
        console.log('updatedUser', updatedUser)
        return updatedUser
    } catch (err) {
        throw err;
    }
}

async function sendReservationToOwner(reservation) {
    const msgSent = await httpService.put(_getUrl('sendMsg'), reservation)
    try {
        return msgSent
    } catch (err) {
        throw err;
    }
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
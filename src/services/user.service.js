import httpService from './http.service';

export default {
    login,
    getLoggedInUser,
    logout,
    signUp,
    sendReservationToOwner,
    updateUserLikedYachts,
    setLoggedInUser
}

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

async function login(user) {
    let validUser = await httpService.post(_getUrl('login'), user)
    delete validUser.reservations;
    return _handleSuccessfullRegister(validUser)
}

async function updateUserLikedYachts(updateLikedYachts) {
    try {
        const updatedUserLikedYachts = await httpService.put(_getUrl('updateLikedYachts'), updateLikedYachts)
        let currUserLoggedIn = { ...loggedInUser };
        currUserLoggedIn.likedYachts = updatedUserLikedYachts;
        return currUserLoggedIn;
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
    return _handleSuccessfullRegister(validUser);
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

function setLoggedInUser(user) {
    return _handleSuccessfullRegister(user);
}

function getLoggedInUser() {
    return loggedInUser;
}

function _getUrl(userId = '') {
    return `user/${userId}`
}

function _handleSuccessfullRegister(user) {
    loggedInUser = user
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return loggedInUser;
}
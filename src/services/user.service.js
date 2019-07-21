import httpService from './http.service';

export default {
    login,
    getLoggedInUser,
    logout,
    signUp,
    addFavorite,
    sendReservationToOwner,
    updateUserLikedYachts
}

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

async function login(user) {
    let validUser = await httpService.post(_getUrl('login'), user)
    // const userLikedYachts = validUser.likedYachts;
    // const userReservations = validUser.reservations;
    delete validUser.reservations;
    // delete validUser.likedYachts;
    return _handleSuccessfullRegister(validUser)
    // return [validUser, { userReservations }]
}

async function updateUserLikedYachts(updateLikedYachts) {
    try {
        const updatedUserLikedYachts = await httpService.put(_getUrl('updateLikedYachts'), updateLikedYachts)
        let currUserLoggedIn = loggedInUser;
        currUserLoggedIn.likedYachts = updatedUserLikedYachts;
        return _handleSuccessfullRegister(currUserLoggedIn);
    } catch (err) {
        throw err;
    }
}

async function addFavorite(likedYacht) {
    const updatedUserLikedYachts = await httpService.put(_getUrl(), likedYacht)
    try {
        let currUserLoggedIn = loggedInUser;
        currUserLoggedIn.likedYachts = updatedUserLikedYachts;
        return _handleSuccessfullRegister(currUserLoggedIn);
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
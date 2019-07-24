import httpService from './http.service';

export default {
    login,
    getLoggedInUser,
    logout,
    signUp,
    sendReservationToOwner,
    updateUserLikedYachts,
    replyUserMsg,
    loadUserReservations,
    updateLoggedInUserIsOwner,
    loadLikedYachts,
    getLoggedInUserMsgs
}

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

async function login(user) {
    let validUser = await httpService.post(_getUrl('login'), user)
    return _handleSuccessfullRegister(validUser)
}

async function getLoggedInUserMsgs(userLoggedInId) {
    try {
        let userMsgs = await httpService.get(_getUrl('userMsgs'), userLoggedInId)
        return userMsgs;
    } catch (err) {
        console.log('Could not load user msgs error:', err)
        throw err;
    }
}

async function updateLoggedInUserIsOwner(userId) {
    let updatedLoggedInUserIsOwner = await httpService.put(_getUrl(userId))
    let currUserLoggedIn = { ...loggedInUser };
    currUserLoggedIn.isOwner = updatedLoggedInUserIsOwner
    return currUserLoggedIn;
}

async function loadUserReservations(userId) {
    try {
        let userReservations = await httpService.get(_getUrl(userId))
        return userReservations;
    } catch (err) {
        console.log('Could not load user reservations error:', err)
        throw err;
    }
}

async function replyUserMsg(replyUser) {
    try {
        let messageRecivedFromOwner = await httpService.put(_getUrl('sendMsgToUser'), replyUser)
        return messageRecivedFromOwner;
    } catch (err) {
        throw err;
    }
}

async function updateUserLikedYachts(updateLikedYachts) {
    try {
        const updatedUserLikedYachts = await httpService.put(_getUrl('updateLikedYachts'), updateLikedYachts)
        return updatedUserLikedYachts;
    } catch (err) {
        throw err;
    }
}

async function sendReservationToOwner(reservation) {
    try {
        const msgSent = await httpService.put(_getUrl('sendMsg'), reservation)
        return msgSent
    } catch (err) {
        throw err;
    }
}

async function loadLikedYachts(userId) {
    try {
        const userLikedYachts = await httpService.get(_getUrl(), userId)
        return userLikedYachts;
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
    loggedInUser = {...user};
    delete loggedInUser.messages;
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return user;
}
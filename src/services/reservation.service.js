import httpService from './http.service';

export default {
    addReservation,
    query
}

function query(filterBy = {}) {
    console.log('filterBy',filterBy)
    return httpService.get(_getUrl(), filterBy)
}

function addReservation(currReservation) {
    return httpService.post(_getUrl(), currReservation)
}

function _getUrl(reservationId = '') {
    return `reservation/${reservationId}`
}

//TODO: IN CASE OF PAYMENT CANCELED/RETURN OFFER OTHER BOAT ??
function _handleWantedDates(wantedDates) {
    // LOCAL STORAGE
    sessionStorage.setItem('wantedDates', JSON.stringify(wantedDates));
    // return wantedDates;
}
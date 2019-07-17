import httpService from './http.service';

export default {
    makeReservation
}

function makeReservation(wantedReservation) {
    console.log("do reservation service: ", wantedReservation);
    return httpService.post(_getUrl(), wantedReservation)
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
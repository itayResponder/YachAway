import httpService from './http.service';

export default {
    makeReservation
}

function makeReservation(wantedReservation) {
    console.log("do reservation service: ", wantedReservation);
    return httpService.post(_getUrl(wantedReservation))
}



function _getUrl(yachtId = '') {
    return `reservation/${yachtId}`
}

// IN CASE OF PAYMENT RETURN OFFER OTHER BOAT ??
function _handleWantedDates(wantedDates) {
    // LOCAL STORAGE
    sessionStorage.setItem('wantedDates', JSON.stringify(wantedDates));
    // return wantedDates;
}
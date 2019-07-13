import httpService from './http.service'

export default {
    query,
    getById,
    remove,
    save,
    update
}

function query() {
    return httpService.get(_getUrl());
}

function remove(yachtId) {
    return httpService.delete(_getUrl(yachtId));
}

function getById(yachtId) {
    return httpService.get(_getUrl(yachtId));
}

function save(yacht) {
    if (yacht._id) {
        console.log('yacht.service yachtId',yacht._id)
        return httpService.put(_getUrl(yacht._id), yacht);
    } else {
        return httpService.post(_getUrl(), yacht);
    }
}

function update(yacht) {
    return httpService.put(_getUrl(yacht._id), yacht);
}

function _getUrl(yachtId = '') {
    return `yacht/${yachtId}`
}
export const utilService = {
    makeId,
    getRandomIntInclusive,
    getDate
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getDate() {
    const date = new Date().getFullYear()+'-'+String(new Date().getMonth()+1).padStart(2,0)+'-'+String(new Date().getDate()).padStart(2,0)
    return date
}
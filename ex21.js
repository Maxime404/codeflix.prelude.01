module.exports = function reverse(str = '') {

    strAr = str.split('');
    strArReverse = strAr.reverse();
    return strArReverse.join('');
}
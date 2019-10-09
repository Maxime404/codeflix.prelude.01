module.exports = function swapCase(str = '') {

    let flipStr = '';
    /*for (let i = 0; i <= str.length; i++) {
        (str.charAt(i) === str.charAt(i).toLowerCase()) ? upperCase(str.charAt(i)) : lowerCase(str.charAt(i));
    }*/
    for (char of str) {
        (char === char.toLowerCase()) ? upperCase(char) : lowerCase(char);
    }

    return flipStr;

    function upperCase(char) {
        flipStr += char.toUpperCase();
    }

    function lowerCase(char) {
        flipStr += char.toLowerCase();
    }
}
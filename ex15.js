module.exports = function countSubstrings(str = '', substring) {

    let i = 0;
    let position = 0;

    while (true) {
        position = str.indexOf(substring, position);
        if (position !== -1) {
            position++;
            i++
        } else break;
    }
    return i;
}
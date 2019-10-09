module.exports = function includes(str = '', search, positionOpt = 0) {

    return str.includes(search, ++positionOpt);
}
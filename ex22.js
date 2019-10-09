module.exports = function splice(str = '', start, deleteCountOpt = str.length - start, toAddOpt = '') {

    return (start < 0)
        ? str.substring(0, str.length + start) + toAddOpt + str.substring(str.length + start + deleteCountOpt)
        : str.substring(0, start) + toAddOpt + str.substring(start + deleteCountOpt);
}
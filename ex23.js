module.exports = function trim(str = '', whiteSpaceOpt = ' ') {

    let regex = new RegExp('^' + whiteSpaceOpt + '+|' + whiteSpaceOpt + '+$', 'g')
    return str.replace(regex, '');
}
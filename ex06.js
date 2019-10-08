module.exports = function kebabCase(str = '') {

    if (str.indexOf(' ') !== -1) { spaceToKebab() }
    //if (str !== str.toLowerCase()) { upperCaseToKebab() }
    if (str.indexOf('-') !== -1) { indentToKebab() }

    return str;

    function spaceToKebab() {
        while (str.indexOf(' ') !== -1) {
            str = str.replace(' ', '-');
        }
        str = str.toLowerCase();
    }

    function upperCaseToKebab() {
        for (let i = 0; i <= str.length; i++) {
            if(str.charAt(i) !== str.charAt(i).toLowerCase() 
            && str.charAt(i+1) === str.charAt(i+1).toLowerCase()
            && i !== 0) {
                str = str.slice(0, i)+ '-' + str.slice(i);
                str = str.slice(0, i+1) + str.charAt(i+2).toLowerCase() + str.slice(i+3);
            }
        }
    }

    function indentToKebab() {
        if (str.indexOf('-', 0)) { str = str.substring(1, str.length) }
        if (str.indexOf('-', str.length)) { str = str.substring(0, str.length - 1) }
    }
}
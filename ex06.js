module.exports = function kebabCase(str = '') {

    if (str.indexOf(' ') !== -1) { spaceToKebab() }
    if (str.indexOf('-') !== -1) { indentToKebab() }
    if (str !== str.toLowerCase()) { upperCaseToKebab() }

    return str;

    function spaceToKebab() {
        while (str.indexOf(' ') !== -1) {
            str = str.replace(' ', '-');
        }
        str = str.toLowerCase();
    }

    function indentToKebab() {
        if (str.indexOf('-') === 0) { str = str.substring(1, str.length) }
        if (str.lastIndexOf('-') === --str.length) { str = str.substring(0, --str.length) }
        str = str.toLowerCase();
    }

    function upperCaseToKebab() {
        for (let i = 0; i <= str.length; i++) {
            if (str.charAt(i) !== str.charAt(i).toLowerCase()
                && i !== 0) {
                str = str.slice(0, i) + '-' + str.slice(i);
                i++;
            }
        }
        str = str.toLowerCase();
    }
}
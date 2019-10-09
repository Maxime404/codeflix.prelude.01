module.exports = function snakeCase(str = '') {

    if (str.indexOf(' ') !== -1) { spaceToSnake() }
    if (str.indexOf('-') !== -1) { indentToSnake() }
    if (str.indexOf('_') !== -1) { underscoreToSnake() }
    if (str !== str.toLowerCase()) { upperCaseToSnake() }

    return str;

    function spaceToSnake() {
        while (str.indexOf(' ') !== -1) {
            str = str.replace(' ', '_');
        }
        str = str.toLowerCase();
    }

    function indentToSnake() {
        while (str.indexOf('-') !== -1) {
            str = str.replace('-', '_');
        }
        str = str.toLowerCase();
    }

    function underscoreToSnake() {
        if (str.indexOf('_') === 0) { str = str.substring(1, str.length) }
        if (str.lastIndexOf('_') === --str.length) { str = str.substring(0, --str.length) }
        str = str.toLowerCase();
    }

    function upperCaseToSnake() {
        for (let i = 0; i <= str.length; i++) {
            if (str.charAt(i) !== str.charAt(i).toLowerCase()
                && i !== 0) {
                str = str.slice(0, i) + '_' + str.slice(i);
                i++;
            }
        }
        str = str.toLowerCase();
    }
}
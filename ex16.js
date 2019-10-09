module.exports = function countWords(str = '') {

    str = str.replace(/[^0-9a-zA-Z ]/gi, '').trim();
    return (str.indexOf(' ') !== -1) ? spaceToCount() : camelCaseToCount();

    function spaceToCount() {
        strAr = str.split(' ');
        return strAr.filter(function(nonEmptyElements) {
            return nonEmptyElements !== '';
        }).length;
    }

    function camelCaseToCount() {
        let upperCaseWordsCount = 0;
        for (let i = 0; i <= str.length; i++) {
            if (str.charAt(i) !== str.charAt(i).toLowerCase()) {
                upperCaseWordsCount++;
            }
        }
        return upperCaseWordsCount;
    }
}
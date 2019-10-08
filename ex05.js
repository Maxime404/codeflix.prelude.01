module.exports = function decapitalize(str = '') {
    return (str.indexOf(' ') !== -1) ? someWordsDecapitalize() : str.charAt(0).toLowerCase() + str.slice(1);
    
    function someWordsDecapitalize() {
        let splitedStrAr = str.split(' ');
        for(i in splitedStrAr) {
            splitedStrAr[i] = splitedStrAr[i].charAt(0).toLowerCase() + splitedStrAr[i].slice(1);
        }
        return splitedStrAr.join(' ');
    }
}
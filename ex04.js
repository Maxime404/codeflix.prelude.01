module.exports = function capitalize(str = '', restToLowerOpt = false) {
    
    return (!restToLowerOpt) ? str.charAt(0).toUpperCase() + str.slice(1) : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
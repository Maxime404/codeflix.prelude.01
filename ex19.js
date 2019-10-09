module.exports = function insert(str = '', toInsertOpt = '', positionOpt = 0) {

    return str.slice(0, positionOpt) + toInsertOpt + str.slice(positionOpt);
}
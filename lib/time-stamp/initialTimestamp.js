export {
    initTimestap,
    getNanos,
    getSecounds
}
function initTimestap () {
    return new Date()
}

function getSecounds () {
    return new Date().getSeconds()
}

function getNanos() {
    return new Date().getSeconds()*1000000
}

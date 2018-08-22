import adBlocker from 'just-detect-adblock'

export function checkForAdds () {

    const check = adBlocker.isDetected() === true ? true : false

    return check
}

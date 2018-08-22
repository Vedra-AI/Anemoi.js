import adBlocker from 'just-detect-adblock'

export function checkForAdds () {

    const check = adBlocker.isDetected() === true ? true : false

    return check
}

export function getDocumentCookies () {

    const theCookies = document.cookie.split(';')

    const cookieResponse = theCookies.filter(response => {

        return response

    })
    return cookieResponse.toString()
}

export function isTracking () {

    const isTrack = window.navigator.doNotTrack

    return false
}

export function getLocale () {
    const lang = window.navigator.language

    if (lang != undefined) {

        return lang
    }
}
export function getLocation () {
    //NB
    console.log('ns', navigator.geolocation.getCurrentPosition(showPosition));
    return 'GB'
}
export function getTimezone () {

    return new Date().getTimezoneOffset().toString()
}
export function checkUserAgent () {

    return navigator.userAgent
}

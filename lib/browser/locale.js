export function getLocale () {
    const lang = window.navigator.language

    if (lang != undefined) {

        return lang
    }
}

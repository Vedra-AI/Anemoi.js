
export function getDocumentCookies () {

    const theCookies = document.cookie.split(';')

    const cookieResponse = theCookies.filter(response => {

        return response

    })
    return cookieResponse
}

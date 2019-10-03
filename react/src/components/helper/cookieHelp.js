
export function getCookie(name, cookies) {

    return cookies.get(name)

}
export function clearCookie(cookies) {

    cookies.remove('value', { path: '/' });

}


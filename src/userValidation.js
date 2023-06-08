export function userValidation (userIsSignedIn) {

    if (userisSignedIn) {
        window.location.replace('/sign-in/')
    } else {
        alert('usuario está legeado')
    }
}
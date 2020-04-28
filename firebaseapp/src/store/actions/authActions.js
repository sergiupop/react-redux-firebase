export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
            console.log("YES!");
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}
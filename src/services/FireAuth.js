import { TranslateErrosAuth } from "./TranslateErros"
import firebaseRef from "./FirebaseServices"
import FireStore from "./FireStore"

const authRef = firebaseRef('auth')
const AUTH = authRef()
AUTH.useDeviceLanguage()

const logingWithFacebook = () => {
    const provider = new authRef.FacebookAuthProvider()
    AUTH.signInWithRedirect(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken
            var user = result.user
            console.log(user, token)
        }).catch(error => { throw TranslateErrosAuth(error) })
}

const logingWithGoogle = () => {
    const provider = new authRef.GoogleAuthProvider()
    AUTH.signInWithRedirect(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken
            var user = result.user
            console.log(user, token)
        }).catch(error => { throw TranslateErrosAuth(error) })
}

const authStateChanged = onchange => {
    return AUTH
        .onAuthStateChanged(user => {
            if (user) {
                const { uid, displayName, email, photoURL } = user
                onchange({
                    uid,
                    name: displayName,
                    email,
                    photo: photoURL
                })
            } else {
                onchange(null)
            }
        })
}

const Login = (userInfoDigited, isReg) => {
    const method = isReg ? 'createUserWithEmailAndPassword' : 'signInWithEmailAndPassword'
    const { name, email, password, cel } = userInfoDigited

    return AUTH[method](email, password)
        .then(userObject => {
            //userObject.additionalUserInfo.isNewUser
            if (isReg) {
                addNewUserToDB({
                    uid: userObject.user.uid,
                    name,
                    email,
                    cel,
                    password
                })

                userObject.user.updateProfile({ displayName: name })
                    .catch(error => TranslateErrosAuth(error))
            }
            return userObject
        })
        .catch(error => {
            throw TranslateErrosAuth(error)
        })
}

const addNewUserToDB = user => {
    return FireStore.addNewUser(user)
        .catch(error => { throw error })
}

/*
const getUserInfoFromDB = user => {
    return FireStore.getUserInfoByProp('email', '==', user.email)
        .then(docs => {
            let newUser = null
            docs.forEach(doc => {
                newUser = { ...doc.data(), id: doc.id }
            })
            return newUser
        })
        .catch(error => { throw error })
}
*/
const loggout = () => {
    AUTH.signOut()
        .catch(error => { throw error })
}

//https://firebase.google.com/docs/auth/web/manage-users

export default {
    Login,
    loggout,
    authStateChanged,
    logingWithGoogle,
    logingWithFacebook
}
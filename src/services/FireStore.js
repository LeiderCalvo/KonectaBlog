import firebaseRef from './FirebaseServices'

const dbRef = firebaseRef('firestore')
let DB = dbRef()

const createID = path => DB.collection(path).doc().id

const addNewUser = user => {
    return DB.collection('users').doc(user.uid).set(user)
        .catch(error => { throw error })
}

const getUserInfoByProp = (prop, compare, val) => {
    return DB.collection('users').where(prop, compare, val).get()
        .then(docs => docs)
        .catch(error => { throw error })
}

const getUserFavsIds = id => {
    return DB.collection(`users/${id}/favorites`).get()
        .then(docs => {
            let favs = []
            docs.docs.forEach(doc => favs.push(doc.data().prodID))
            return favs
        })
        .catch(error => { throw error })
}

const getUserFavsDocs = idsArray => {
    return [].filter(prod => idsArray.some(id => prod.id === id))
}

const addNewFavToUser = ({ uid, id }) => {
    return DB.doc(`users/${uid}/favorites/${id}`).set({ prodID: id })
        .catch(error => { throw error })
}

const deleteFavFromUser = ({ uid, id }) => {
    return DB.doc(`users/${uid}/favorites/${id}`).delete()
        .catch(error => { throw error })
}






const addPost = post => {
    const id = createID('posts')
    return DB.collection('posts').doc(id).set({
        ...post,
        id,
        slug: post.title.trim(),
        creationDate: Date.now()
    })
        .catch(error => { throw error })
}

const getAllPosts = _ => {
    const temp = []
    const unsuscribe = DB.collection("posts")
        .onSnapshot(docs => {
            !docs.empty &&
                docs.docs.forEach(doc => temp.push(doc.data()))
        })

    return {
        unsuscribe,
        data: temp
    }
}

export default {
    createID,
    addNewUser,
    getUserInfoByProp,
    getUserFavsIds,
    addNewFavToUser,
    deleteFavFromUser,
    getUserFavsDocs,



    addPost,
    getAllPosts
}
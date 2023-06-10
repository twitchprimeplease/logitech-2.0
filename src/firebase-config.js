// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { userValidation } from "./userValidation.js";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBNHs_UEKCTputSLoHZZXsL6wUjWPuJoA",
    authDomain: "logitech-web-project.firebaseapp.com",
    projectId: "logitech-web-project",
    storageBucket: "logitech-web-project.appspot.com",
    messagingSenderId: "99324536990",
    appId: "1:99324536990:web:caee4958330bb57d6ab38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Storagess
const storage = getStorage(app);

// onAuthStateChanged(auth, (user) => {
//     console.log("hubo un cambio")
//     if (user) {
//         //const uid = user.uid;
//         userValidation(true)
//     } else {
//         userValidation(false)
//     }
// });

export async function getTasks() {

    const allTasks = []

    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        allTasks.push({ ...doc.data(), id: doc.id })
    });

    return allTasks
}

export async function addTask(taskTitle) {

    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addUserToDb(userInfo, id) {
    console.log(userInfo)
    try {
        await setDoc(doc(db, "usuarios", id), userInfo);
        console.log("user written with ID: ", id);
    } catch (e) {
        console.error("Error adding user: ", e);
    }
}

export async function editDocument(title, id) {

    // Add a new document in collection "cities"
    await setDoc(doc(db, "usuarios", id), {
        title: title,
        completed: true,
    });
}

export async function createUser(userInfo) {

    try {
        console.log(userInfo);
        const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
        // Signed in
        console.log(1)
        const user = userCredential.user;
        console.log(2)

        // Subir Imagen
        const url = await uploadFile(user.uid + userInfo.picture.name, userInfo.picture, 'profilePictures')
        console.log(3)

        // crear usuario en DB

        const dbInfo = {
            url,
            email: userInfo.email,
            name: userInfo.name,
            lastname: userInfo.lastname,
            pass: userInfo.pass
        }
        console.log(dbInfo)

        await addUserToDb(dbInfo, user.uid)
        console.log(4)
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
    }

}

export async function uploadFile(name, file, folder) {
    console.log(5)
    try {
        const taskImgRef = ref(storage, `${folder}/${name}`);
        console.log(taskImgRef)
        await uploadBytes(taskImgRef, file);
        console.log(7)
        const url = await getDownloadURL(taskImgRef);
        console.log(8)
        return url;
    } catch (error) {
        console.log("error creando imagen ->", error);
    }
}

export async function logInUser(userInfo) {
    try {
        
        const userCredential = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
        .then((userCredential) => {
            // Signed in"
            console.log("Felicidades")
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            });

    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
    }
}

export async function logOut() {

    try{
    await signOut(auth)

    } catch(error) {
        console.error(error)
    };

}
export function getCurrentUser(){
    const user = auth.currentUser;
    let result;
    if (user) {
        result = user;
    } else {
        result = 'local'
    }
    return result;
}

export async function setCart(username, product){
    const userRef = doc(db, "shopping-cart", username);
    await updateDoc(userRef, {
        shoppingCart: arrayUnion(product),
    });
    // const docRef = await addDoc(collection(db, "shopping-cart"), product);
    // console.log("Document written with ID: ", docRef.id);
    }

    export async function getCart(username){
        const allProducts = []

        const querySnapshot = await getDocs(collection(db, "shopping-cart"));
        querySnapshot.forEach((doc) => {
            allProducts.push({ ...doc.data(), id: doc.id })
        });
    return allProducts;
    }

    export async function getProducts(){
        const allProducts = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
    
            allProducts.push({...doc.data(), id: doc.id});
        });
    
        return allProducts;
    }

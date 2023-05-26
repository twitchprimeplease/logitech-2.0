
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";



const firebaseConfig = {


};

    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Storage
const storage = getStorage(app);

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
        console.log(userInfo);
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


    };



export async function getProducts(){
    const allProducts = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {

        allProducts.push({...doc.data(), id: doc.id});
    });

    return allProducts;
}

export async function setCart(username, product){
    const userRef = doc(db, "shopping-cart", username);
    await updateDoc(userRef, {
        shoppingCart: arrayUnion(product),
    });
    // const docRef = await addDoc(collection(db, "shopping-cart"), product);
    // console.log("Document written with ID: ", docRef.id);
    }

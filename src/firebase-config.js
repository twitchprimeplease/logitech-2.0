
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBNHs_UEKCTputSLoHZZXsL6wUjWPuJoA",
    authDomain: "logitech-web-project.firebaseapp.com",
    projectId: "logitech-web-project",
    storageBucket: "logitech-web-project.appspot.com",
    messagingSenderId: "99324536990",
    appId: "1:99324536990:web:caee4958330bb57d6ab38f"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
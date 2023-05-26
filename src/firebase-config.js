
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const firebaseConfig = {
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


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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


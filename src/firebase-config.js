
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {

    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts(){
    const allProducts = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allProducts.push({...doc.data(), id: doc.id});
    });

    return allProducts;
}

export async function temporalAddProduct(){

}

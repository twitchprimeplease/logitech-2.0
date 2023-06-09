import './styles.css'
import { getCurrentUser, getCart } from '../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

let shoppingCartContainer = document.querySelector('#shopping-card-container');

let currentUserUID;
let currentUser;

onAuthStateChanged(auth, (user) => {

    if (user) {
        currentUser = user;
        currentUserUID = user.uid;
        console.log(currentUserUID);
        showCart();
    } else {
        
    }
});

async function showCart(){
    let carrito = await getCart();
    let userCarrito = [];

    carrito.forEach(element => {
        if (element.id === currentUserUID) {
            userCarrito = element.shoppingCart;
            console.log(userCarrito);
        }
    });

    shoppingCartContainer.innerHTML = '';

    if (userCarrito.length > 0) {

        userCarrito.forEach(element => {

            const cardObj = document.createElement('shopping-card-element');
            cardObj.setAttribute('name', element.name);
            cardObj.setAttribute('price', element.price);
            cardObj.setAttribute('image', element.url[0]);
            cardObj.setAttribute('type', element.type);
        
            shoppingCartContainer.appendChild(cardObj);
        });
    } 

}






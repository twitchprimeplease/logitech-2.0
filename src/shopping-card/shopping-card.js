import './styles.css'
import { getCurrentUser, getCart } from '../firebase-config';

let shoppingCartContainer = document.querySelector('#shopping-card-container');

let currentUserUID
let currentUser = getCurrentUser();
if(currentUser =! 'local'){
    currentUserUID = currentUser.uid;
}

let carrito = getCart(currentUserUID);

carrito.forEach(element => {

    const cardObj = document.createElement('shopping-card-element');
    cardObj.setAttribute('name', product.name);
    cardObj.setAttribute('price', product.price);
    cardObj.setAttribute('image', product.url[0]);
    cardObj.setAttribute('type', product.type);
    
    shoppingCartContainer.append(cardObj);
});



import './styles.css'
import { getCurrentUser, getCart } from '../firebase-config';

let shoppingCartContainer = document.querySelector('#shopping-card-container');

let currentUserUID = "uWqgp09J6hRV3yJ5EFfCz4xNlxZ2"
let currentUser = getCurrentUser();
if(currentUser =! 'local'){
    currentUserUID = currentUser.uid;
}

async function showCart(){
    let carrito = await getCart("user-1");
    let userCarrito = [];

    carrito.forEach(element => {
        if (element.id === currentUserUID) {
            userCarrito.push(element);
        }
    })
    console.log(userCarrito)

    let userFinal = userCarrito[0].shoppingCart

    console.log(userFinal)

userFinal.forEach(element => {

    const cardObj = document.createElement('shopping-card-element');
    cardObj.setAttribute('name', element.name);
    cardObj.setAttribute('price', element.price);
    cardObj.setAttribute('image', element.url[0]);
    cardObj.setAttribute('type', element.type);

    shoppingCartContainer.append(cardObj);
});
}
showCart();





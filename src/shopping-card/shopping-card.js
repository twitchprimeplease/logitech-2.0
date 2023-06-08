import './styles.css'
import { getCurrentUser, getCart } from '../firebase-config';

// let shoppingCartContainer = querySelector('#shopping-card-container');
// let priceContainer = querySelector('#price-container');

let currentUser = getCurrentUser();
if(currentUser =! 'local'){
    let currentUserUID = currentUser.uid;
}



// console.log(getCart(currentUserUID));
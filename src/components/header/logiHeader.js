import './styles.css'
import { getCurrentUser } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

class logiHeader extends HTMLElement {
    constructor() {
        super();
        this.render();
    }


    render() {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                this.innerHTML = `
                <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/images/natha-img/logitech-logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link button" href="#">DISCOVER</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link button" href="/product-list/">PRODUCTS</a>
                    </a>
                    <li class="nav-item">
                    <a class="nav-link button" href="#">ABOUT</a>
                    </li>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link button" href="#">CONTACT</a>
                    </li>
                </ul>
                <div class="option-btn">
                <a class="shop-btn" href="/shopping-card/"><img src="/images/natha-img/shopping-cart.png" alt=""></a>
                <a class="user-btn" href="#"><img src="/images/natha-img/user.png" alt=""></a>
                </div>
                </div>
            </div>
            </nav>
            </header>
            `;
            } else {
                this.innerHTML = `
                <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/images/natha-img/logitech-logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link button" href="#">DISCOVER</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link button" href="/product-list/">PRODUCTS</a>
                    </a>
                    <li class="nav-item">
                    <a class="nav-link button" href="#">ABOUT</a>
                    </li>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link button" href="#">CONTACT</a>
                    </li>
                </ul>
                <a class="login-btn button" href="/sign-in/"> <button type="button" id="btn-nav" class="button">SIGN IN</button></a>
                <a class="create-btn button" href="/sign-up/"> <button type="button" id="btn-nav" class="button">SIGN UP</button></a>
                </div>
            </div>
            </nav>
            </header>
            `;
            }
        });

        /*let usuario = getCurrentUser();
        console.log(usuario)
        if(usuario != 'local') {
            console.log("ayuda");
            this.innerHTML = `
            <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/images/natha-img/logitech-logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link button" href="#">DISCOVER</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link button" href="/product-list/">PRODUCTS</a>
                </a>
                <li class="nav-item">
                <a class="nav-link button" href="#">ABOUT</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link button" href="#">CONTACT</a>
                </li>
            </ul>
            <a class="login-btn button" href="/sign-in/"> <button type="button" id="btn-nav" class="button">SIGN IN</button></a>
            <a class="create-btn button" href="/sign-up/"> <button type="button" id="btn-nav" class="button">SIGN UP</button></a>
            </div>
        </div>
        </nav>
        </header>
        `;
        } else if (usuario === 'local'){
            this.innerHTML = `
            <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/images/natha-img/logitech-logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link button" href="#">DISCOVER</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link button" href="/product-list/">PRODUCTS</a>
                </a>
                <li class="nav-item">
                <a class="nav-link button" href="#">ABOUT</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link button" href="#">CONTACT</a>
                </li>
            </ul>
            <a class="login-btn button" href="/sign-in/"> <button type="button" id="btn-nav" class="button">SIGN IN</button></a>
            <a class="create-btn button" href="/sign-up/"> <button type="button" id="btn-nav" class="button">SIGN UP</button></a>
            </div>
        </div>
        </nav>
        </header>
        `;
            console.log('LOCATE')
        }*/
    }
}

customElements.define('logi-header', logiHeader);
export default logiHeader;
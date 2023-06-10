import './style.css';
import { setCart, getCurrentUser } from '../../firebase-config.js';  
class detailElement extends HTMLElement {
    constructor() {
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');
        this.type = this.getAttribute('type');
        this.image = this.getAttribute('image');
        this.color = this.getAttribute('color');
        this.images = [];
        this.colors = [];
        this.body = "";
        this.contador = 0;
        this.current = 0;
        this.array = [];
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['name', 'description', 'image', 'price', 'type', 'color']
    }

    attributeChangedCallback(propName, oldvalue, newValue) {
        this[propName] = newValue;
        this.render();

    }

    forward() {

        const demoId = document.querySelector('detail-element');
        const images = demoId.querySelectorAll('img');
        const count = images.length;

        let pos=0;
        let activeImage;
        for (let i = 0; i < images.length; i++) {
            if (images[i].style.display === 'block') {
                activeImage = images[i];
                pos=i;
                break; // Salir del bucle si se encontró la imagen activa
            }
        }

        console.log(activeImage);

        if((pos+1) == count ){
            activeImage.setAttribute('style', 'display:none');
            images[0].setAttribute('style', 'display:block');
        }else{
            activeImage.setAttribute('style', 'display:none');
            images[pos+1].setAttribute('style', 'display:block');
        }


    }

    backward() {

        const demoId = document.querySelector('detail-element');
        const images = demoId.querySelectorAll('img');
        const count = images.length;

        let pos=0;
        let activeImage;
        for (let i = 0; i < images.length; i++) {
            if (images[i].style.display === 'block') {
                activeImage = images[i];
                pos=i;
                break; // Salir del bucle si se encontró la imagen activa
            }
        }

        if((pos+1) == 1 ){
            activeImage.setAttribute('style', 'display:none');
            images[count-1].setAttribute('style', 'display:block');
        }else{
            activeImage.setAttribute('style', 'display:none');
            images[pos-1].setAttribute('style', 'display:block');
        }
    }

    render() {
        if (this.image !== null) {
            this.images = this.image.split('$');
        };
        if (this.color !== null) {
            this.colors = this.color.split('$');
        }
        if (this.image !== null && this.color !== null) {
            this.contador = this.images.length;
            this.body = `
            <article class="product">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-7">`;
            for (let i = 0; i < this.images.length; i++) {
                this.body += `
                        <img class="`+ (0) + `" id="img` + i + `" src= ${this.images[i]} alt="" `; if (i == 0) {
                    this.body += ` style="display:block;"`
                } else {
                    this.body += ` style="display:none;"`
                } this.body += `>
                        `
            }
            this.body += `
                    </div>
                    <div class="cont-arti col-md-5 align-items-center">
                        <h5 class="product-type">${this.type}</h5>
                            <div class = "product-info">
                                <h3 class ="title-1 product-name">${this.name}</h4>
                                <div class="product-description">
                                    <p class="txt-body">${this.description}</p>
                                </div>
                                <h4 class="headline price">$${this.price}</h4>
                                </div>
                                <button type="button" id="add-cart-btn" class="btn-primary button" href="/${this.name}">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </article>
    `
            this.innerHTML = this.body;

            const addCartBtn = document.querySelector('#add-cart-btn');
            addCartBtn.addEventListener('click', async() =>  {
                let user = getCurrentUser();
                console.log(user);
                if (user != 'local') {
                    try {
                        await setCart(user.uid,this.array);
                        } catch (e) {
                        console.log(e);
                            }
                } else if (user === 'local') {
                    window.location.assign('../../sign-in/index.html')
                }


            });

        }

    }

    giveImages(images) {
        console.log(images)
        this.images = images;
        console.log(this.images[0].img)
        this.innerHTML = '<div> <img src=' + this.images[0].img + ' alt=' + this.images[0].alt + ' /> </div>'
    }

}

customElements.define('detail-element', detailElement);
export default detailElement;
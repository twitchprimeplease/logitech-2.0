import './styles.css';
class shoppingCardElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'image', 'price','type']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        let reference = this.name.replaceAll(" ", "-");
        let url = "../product-detail/index.html?id=" + reference;
        this.innerHTML = `
        <!-- <link rel="stylesheet" href="/src/Components/cardElement/style.css"> -->
            <article class="shopping-card-element">
                <a href="${url}">
                    <div class="image-container">
                            <img class= "shopping-card-img" src= ${this.image} alt="">
                    </div>
                </a>
                <h3 class ="shopping-card-card-name headline">${this.name}</h3>
                <h6 class="shopping-card-type">${this.type}</h6>
                <h5>$${this.price}</h5>
              
            </article>
        `
    }
}

customElements.define('shopping-card-element', shoppingCardElement);
export default shoppingCardElement;
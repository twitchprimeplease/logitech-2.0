import './style.css';
class cardElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image', 'price','type']
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
            <article class="product">
                <div class="image-container">
                        <img class= "product-img" src= ${this.image} alt="">
                </div>
                <div class="type-container">
                    <h5 class="product-type">${this.type}</h5>
                </div>
                <div class = "product-info">
                <h3 class ="product-card-name headline">${this.name}</h3>
                    <div class="product-description">
                        <p>${this.description}</p>
                    </div>
                    <h4>$${this.price}</h4>
                </div>
                <a href="${url}"><button class ="btn-primary">BUY NOW</button></a>
            </article>
        `
    }
}

customElements.define('card-element', cardElement);
export default cardElement;
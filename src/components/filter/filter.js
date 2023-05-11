import './styles.css';
class filterComponent extends HTMLElement{
    constructor (){
        super();
        this.name = this.getAttribute('name');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
            <!-- <link rel="stylesheet" href="/src/Components/filter/styles.css"> -->
            <button type="button" class="btn-primary">${this.name}</button>
        `
    }

}



customElements.define('filter-component', filterComponent);
export default filterComponent;
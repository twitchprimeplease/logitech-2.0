import './styles.css';
class AlternativeFilter extends HTMLElement{ 
    constructor(){
        super();
        this.array=[
            {"category": "Fades Away", "collection":"Villains"},
            {"category": "Heros", "collection":"Other"},
        ];
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.innerHTML = `
                <!-- <link rel="stylesheet" href="/src/Components/alternativeFilter/styles.css"> -->
                <h2 class="headline">SORT BY</h2>
                <nav class="filter-list">
                        <ul class="list">

                        <li class="list-item">
                                <button class ="btn-primary list-button" >CATEGORY</button>
                            <ul id="category-list-component" class="list-show">
                                <button type="button" class="btn-primary">All</button>
                            </ul>

                        </li>

                        <li class="list-item">
                            
                                <button class ="btn-primary list-button" ">COLLECTION</button>
                            
                            <ul id="collection-list-component"class="list-show">
                                <button type="button" class="btn-primary">All</button>
                            </ul>
                        </li>

                        <li class="list-item">
                            
                                <button class ="btn-primary list-button" ">PRICE</button>
                            
                            <ul class="list-show">
                                <button type="button" class="btn-primary">All</button>
                                <button type="button" class="btn-primary">0-50</button>
                                <button type="button" class="btn-primary">50-100</button>
                                <button type="button" class="btn-primary">100+</button>
                            </ul>
                        </li>

                        <li class="list-item">
                            
                                <button class ="btn-primary list-button">COLOR</button>
                            
                            <ul id="color-list-component"class="list-show">
                                <button type="button" class="btn-primary">All</button>
                            </ul>
                        </li>

                    </ul>
                </nav>
            `
            this.createListElements(this.array);
            this.dropdownMenu();

        }

    dropdownMenu(){

        let listElements = document.querySelectorAll('.list-button');
        listElements.forEach(listElement => {
            listElement.addEventListener('click', ()=>{                
                listElement.classList.toggle('arrow');            
                let height = 0;
                let menu = listElement.nextElementSibling;
                if(menu.clientHeight == "0"){
                    height=menu.scrollHeight;
                }
                menu.style.height = `${height}px`;
            })
        });
    }

    createListElements(array){

        const categoryListFilter= document.querySelector('#category-list-component')
        const collectionListFilter= document.querySelector('#collection-list-component')
        const colorListFilter = document.querySelector('#color-list-component')
        const categoryButton = document.querySelectorAll('.list-show button');

        categoryButton.forEach(btn => btn.addEventListener('click', ()=> this.setCategory(btn)))

        const categories = new Set();
        array.forEach(category => {
        categories.add(category.type);
        });


        categories.forEach(category => {
            const filterObj = document.createElement('filter-component');
            filterObj.setAttribute('name',category)
            filterObj.addEventListener("click", () =>{
                this.organiceData(this.array,{"category":category})
            })
        categoryListFilter.append(filterObj);
        });

        const collections = new Set();
        array.forEach(elem => {
            if (elem.collection != "none"){
                collections.add(elem.collection);
            }
        });

        collections.forEach(elem => {
            const filterObj = document.createElement('filter-component');
                filterObj.setAttribute('name',elem);
                filterObj.addEventListener("click", () =>{

                    this.organiceData(this.array,{"collection":elem})
                })
                collectionListFilter.append(filterObj);
        })

        const productColors = new Set();
        array.forEach(element=>{
            let colorlist = element.colors;
            colorlist.forEach(color=>{
                productColors.add(color)
            })
        });
        
        productColors.forEach(elem => {
            const filterObj = document.createElement('filter-component');
                filterObj.setAttribute('name',elem);
                filterObj.addEventListener("click", () =>{
                    this.organiceData(this.array,{"color":elem})
                })
                colorListFilter.append(filterObj);
        })
    }

    organiceData(array, filterType){
        const productContainer = document.querySelector('#products-container');
        let filteredProducts = [];
        productContainer.innerHTML='';

        if((!filterType || filterType==='All')){
            filteredProducts = array;
            } else if(Object.keys(filterType)[0]==='category') {
                filteredProducts = array.filter(product => product.type === Object.values(filterType)[0]);
            } else if(Object.keys(filterType)[0]==='collection'){
                filteredProducts = array.filter(product => product.collection === Object.values(filterType)[0]);
            } else if(filterType === '0-50'){
                array.forEach(element=>{
                    let num =element.price.split('$')[1].split('.')[0];
                    if(num > 0 && num <50){
                        filteredProducts.push(element)
                    }
                })
            }
            else if(filterType === '50-100'){
                array.forEach(element=>{
                    let num =element.price.split('$')[1].split('.')[0];
                    if(num > 50 && num < 100){
                        filteredProducts.push(element)
                    }
                })
            }
            else if(filterType === '100+'){
                array.forEach(element=>{
                    let num =element.price.split('$')[1].split('.')[0];
                    if(num > 100){
                        filteredProducts.push(element)
                    }
                })
            } else if(Object.keys(filterType)[0]==='color') {
                    array.forEach(product => {
                        let colorArray = product.colors;
                        if(colorArray.includes(Object.values(filterType)[0])){
                            filteredProducts.push(product);
                        }
                    });
                    
                
            }
        
        
        
        filteredProducts.forEach(product => {
            const productObj = document.createElement('card-element');
            productObj.setAttribute('name', product.name);
            productObj.setAttribute('description', product.description);
            productObj.setAttribute('price', product.price);
            productObj.setAttribute('image', product.url[0]);
            productObj.setAttribute('type', product.type);
            productContainer.append(productObj);

        });
    }

    setCategory(elem){
        const category = elem.textContent;
        console.log(elem.textContent);
        this.organiceData(this.array,category)
        }
}

customElements.define('alternative-filter', AlternativeFilter);
export default AlternativeFilter;
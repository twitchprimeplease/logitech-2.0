import { getProducts, setComments } from './firebase-config.js';


const productContainer = document.querySelector('detail-element');
const commentsContainer = document.getElementById("comments-container");
const searchFilter = document.querySelector('#category-filters');

const url = window.location.search;
const searchParams = new URLSearchParams(url);
let id = "";

document.querySelector("#back").addEventListener("click", () => {
  productContainer.backward();
});

document.querySelector("#forward").addEventListener("click", () => {
  productContainer.forward();
});

let solicitude = searchParams.get("id").replace('"', "");

async function getData() {
  try {
    let products = await getProducts();
    organizeData(products);
  } catch (e) {
    console.log(e);
  }
}

function organizeData(array) {
  array.forEach(product => {
    let comparison = product.name.replaceAll(" ", "-");
    if (comparison === solicitude) {
      const productObj = document.createElement('detail-element');
      productObj.setAttribute('name', product.name);
      productObj.setAttribute('description', product.description);
      productObj.setAttribute('price', product.price);
      productObj.setAttribute('image', product.url.join('$'));
      productObj.setAttribute('color', product.colors.join('$'));
      productObj.setAttribute('type', product.type);
      productObj.setAttribute('current', 0);
      productObj.array = product;
      productContainer.append(productObj);

      id = product.id;
      console.log(product.comments)

      const commentObj = document.createElement('comments-component');
    commentObj.commentArray = product.comments;
    commentsContainer.appendChild(commentObj);

      commentObj.onSubmit((name, comment) => {
        console.log('Name:', name);
        console.log('Comment:', comment);
        console.log(id)

        setComments("userName", id, name, comment);
      });
    }
  });
}

getData();
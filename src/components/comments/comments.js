class CommentsComponent extends HTMLElement {
    
  
  constructor() {
    const IMG_PATH = "/src/images/cata ima/perfilf.png";
     super();

      this.commentArray=[

      ]
    

      
      
      
    }


    connectedCallback(){
      this.render();
  }

  

  attributeChangedCallback(propName, oldvalue, newValue){
      this[propName] = newValue;
      this.render();

  }
    render() {


      
    this.innerHTML+=`
    <link rel="stylesheet" href="./styles.css">
    
<div class ="container-principal">

<form id="comment-form">

<div class"escribe-tu-comentario">
<div class="profileone">
<img src="/src/images/cata ima/perfilf.png" width="20%">
        </div> 
<div class="comment-tittle headline ">
<p>Write your comment</p>
        </div>

        <div class ="formularios">
        <div class ="comment-box">
        <div class="comment-name button">
        <div class="comment-nameop button">
        <p>Name:</p>
        <div class="input">
<label for="name-input"></label> </input>
<input type="text" id="name-input">
<br>
</div>
</div>
<div class ="comment-box-two">
<div class="comment-opinion button">
<p>Comment:</p>
<textarea id="comment-input"></textarea>
<br>

        </div></div>


<div class="envio ">
<button type="submit">Send</button>
</div>
</form>



        </div>
    
    
    <div id="comment-box">
    <div class="comment-tittle headline ">
    <p>Comments</p>
            </div>
      </div>

      <script type="module">
              
              
      </script>
      

    
      `
      const commentsContainer = document.querySelector('#comment-box');
      const commentForm = document.querySelector('#comment-form');
      const nameInput = document.querySelector('#name-input');
      const commentInput = document.querySelector('#comment-input');
      commentForm.addEventListener('submit', (event) => {
        console.log("uwu");
        event.preventDefault();
        const nameText = nameInput.value.trim();
        const commentText = commentInput.value.trim();
        if (nameText === '' || commentText === '') {
          alert('Debes escribir un nombre y un comentario');
          return;
        }
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-container');
        const profileName = document.createElement('div');
        profileName.classList.add('profileone');
        profileName.innerHTML = `<img src="/src/images/cata ima/perfilf.png" width="70%" >`
        commentElement.appendChild(profileName);
        const headerElement = document.createElement('div');
        headerElement.classList.add('comment');
        headerElement.classList.add('headline');
        headerElement.innerHTML = `<div class="comment headline" data-author="${nameText}">
        <p>${nameText}</p>
        <div class="textco txt-body"> ${commentText}</div>
    </div>`;
        commentElement.appendChild(headerElement);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-comment');
        commentElement.appendChild(deleteButton);
        commentsContainer.appendChild(commentElement);
        nameInput.value = '';
        commentInput.value = '';
      });
      
      commentsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-comment')) {
          event.target.parentElement.remove();
        }
      });




      
      const commentBox = document.querySelector('#comment-box'); 
      let commnetsInfo = this.commentArray.comments
     
      if (commnetsInfo.length > 0) {
          commnetsInfo.forEach((comment) =>{
              const commentObj = document.createElement('user-commment');
              commentObj.setAttribute('image', comment.profileone);
              commentObj.setAttribute('author', comment.author);
              commentObj.setAttribute('comment', comment.text);
              commentBox.append(commentObj);
      
          })
      } else{
        this.innerHTML +=`
        <link rel="stylesheet" href="./styles.css">
        <div class="comment-tittletwo button ">
        <p>Be the first to comment!</p>
                </div>`

      }
      
      
      

      /* 
        this.innerHTML = `
      
        <link rel="stylesheet" href="./styles.css">

<div class ="container-principal">

        <form id="comment-form">

        <div class"escribe-tu-comentario">
        <div class="profileone">
        <img src="/src/images/cata ima/perfilf.png" width="20%">
                </div> 
        <div class="comment-tittle headline ">
        <p>Escribe tu comentario</p>
                </div>

                <div class ="formularios">
                <div class ="comment-box">
                <div class="comment-name button">
                <div class="comment-nameop button">
                <p>Nombre:</p>
                <div class="input">
  <label for="name-input"></label> </input>
  <input type="text" id="name-input">
  <br>
  </div>
  </div>
  <div class ="comment-box-two">
  <div class="comment-opinion button">
  <p>Comentario:</p>
  <textarea id="comment-input"></textarea>
  <br>

                </div></div>
        

  <div class="envio ">
  <button type="submit">Enviar</button>
  </div>
</form>


      
                </div>

                <script type="module">
              import css from './comments-component.css';
              
              const template = document.querySelector('#comments-template').content;
            
              class CommentsComponent extends HTMLElement {
                constructor() {
                  super();
            
                  const shadowRoot = this.attachShadow({ mode: 'open' });
                  shadowRoot.appendChild(template.cloneNode(true));
            
                  const commentForm = shadowRoot.querySelector('#comment-form');
                  const commentInput = shadowRoot.querySelector('#comment-input');
                  const nameInput =  shadowRoot.querySelector('#name-input');
                  const commentsContainer = shadowRoot.querySelector('#comments-container');
            
                  commentForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const commentText = commentInput.value;
                    if (commentText.trim() === '') {
                      alert('Debes escribir un comentario');
                      return;
                    }
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
      
                    const headerElement = document.createElement('h4');
                    headerElement.textContent = nameText;
                    commentElement.appendChild(headerElement);
                    
                    const imgElement = document.createElement('img');
                    imgElement.src = '/src/images/cata ima/perfilf.png';
                    commentElement.appendChild(imgElement);
      
                    commentElement.textContent = commentText;
                    commentsContainer.appendChild(commentElement);
                    commentInput.value = '';
                  });
            
                  commentsContainer.addEventListener('click', (event) => {
                    if (event.target.classList.contains('delete-comment')) {
                      event.target.parentElement.remove();
                    }
                  });
      
                  commentsContainer.appendChild(commentElement);
                }
              }
            
              
      </script>
        `;

        this.innerHTML+= `<div class="comment-tittle title-1">
        
        <h4>Comentarios</h4>

      <div id="comments-list">
        <div class="comment-container">
        <div class="profileone">
            <img src= "/src/images/cata ima/perfilo.png"width="15%>
            </div>
            <div class ="container-info-comm">
          <div class="comment headline" data-author="Juan">
            <p>Juan</p>
            <div class="textco txt-body"> Excelente producto, lo recomiendo!</div>
          </div>
          </div>

          <div id="comments-list">
          <div class="comment-container">
          <div class="profileone">
              <img src= "/src/images/cata ima/perfilt.png" width="15%>
              </div>
              <div class ="container-info-comm">
            <div class="comment headline" data-author="María">
              <p>María</p>
              <div class="textco txt-body"> Me encantó, muy buena calidad.</div>
            </div>
            </div>
            </div>
            </div>
  
            <div id="comments-list">
            <div class="comment-container">
            <div class="profileone">
                <img src= "/src/images/cata ima/perfiltr.png" width="15%>
                </div>
                <div class ="container-info-comm">
              <div class="comment headline" data-author="Pedro">
                <p>Pedro</p>
                <div class="textco txt-body">El envío fue rápido y todo llegó en perfectas condiciones.</div>
              </div>
              </div>
              </div>
              </div>
              </div>`

        const commentsContainer = document.querySelector('#comments-container');
        const commentForm = document.querySelector('#comment-form');
        const nameInput = document.querySelector('#name-input');
        const commentInput = document.querySelector('#comment-input');
        const imgElement = document.createElement("img");


        
        
/*
        commentForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const nameText = nameInput.value.trim();
          const commentText = commentInput.value.trim();
          if (nameText === '' || commentText === '') {
            alert('Debes escribir un nombre y un comentario');
            return;
          }
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          const headerElement = document.createElement('h4');
          headerElement.textContent = nameText;
          commentElement.appendChild(headerElement);
          const textElement = document.createElement('p');
          textElement.textContent = commentText;
          commentElement.appendChild(textElement);
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.classList.add('delete-comment');
          commentElement.appendChild(deleteButton);
          commentsContainer.appendChild(commentElement);
          nameInput.value = '';
          commentInput.value = '';
        });
        
        commentsContainer.addEventListener('click', (event) => {
          if (event.target.classList.contains('delete-comment')) {
            event.target.parentElement.remove();
          }
        });


*/







        
        
/*intento de cata de hacerlo con json en fracaso xd

function loadComments() {
  fetch('comments.json')
    .then(response => response.json())
    .then(data => showComments(data.comments))
    .catch(error => console.error(error));
}

function showComments(comments) {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `
      <h3 class="comment-author">${comment.author}</h3>
      <p class="comment-text">${comment.text}</p>
    `;
    commentsList.appendChild(commentEl);
  });
}

*/


    }
}



customElements.define('comments-component', CommentsComponent);
export default CommentsComponent;
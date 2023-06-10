import './style.css';
class CommentsComponent extends HTMLElement {
  constructor() {
    super();
    this.commentArray = [];
    this.onSubmitCallback = null;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['comment-array'];
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    if (propName === 'comment-array') {
      this.commentArray = JSON.parse(newValue);
      this.render();
    }
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="./styles.css">
      <div class="container-principal">
        <form id="comment-form">
          <div class="escribe-tu-comentario">
            <div class="profileone">
              <img src="/images/cata ima/perfilf.png" width="20%">
            </div> 
            <div class="comment-tittle headline ">
              <p>Write your comment</p>
            </div>
            <div class="formularios">
              <div class="comment-box">
                <div class="comment-name button">
                  <div class="comment-nameop button">
                    <p>Name:</p>
                    <div class="input">
                      <label for="name-input"></label>
                      <input type="text" id="name-input">
                      <br>
                    </div>
                  </div>
                  <div class="comment-box-two">
                    <div class="comment-opinion button">
                      <p>Comment:</p>
                      <textarea id="comment-input"></textarea>
                      <br>
                    </div>
                  </div>
                  <div class="envio">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div id="comment-box"></div>
      </div>
    `;

    const commentsContainer = this.querySelector('#comment-box');
    const commentForm = this.querySelector('#comment-form');
    const nameInput = this.querySelector('#name-input');
    const commentInput = this.querySelector('#comment-input');

    // Mostrar comentarios existentes
    this.commentArray.forEach((comment) => {
      const commentElement = this.createCommentElement(comment.author, comment.text);
      commentsContainer.appendChild(commentElement);
    });

    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameText = nameInput.value.trim();
      const commentText = commentInput.value.trim();

      if (nameText === '' || commentText === '') {
        alert('You must enter a name and a comment');
        return;
      }

      if (typeof this.onSubmitCallback === 'function') {
        this.onSubmitCallback(nameText, commentText);
      }

      const commentElement = this.createCommentElement(nameText, commentText);
      commentsContainer.appendChild(commentElement);

      nameInput.value = '';
      commentInput.value = '';
    });

    commentsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-comment')) {
        event.target.parentElement.remove();
      }
    });
  }

  createCommentElement(author, text) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment-container');
    commentElement.innerHTML = `
      <div class="profileone">
        <img src="/images/cata ima/perfilf.png" width="70%">
      </div>
      <div class="comment headline" data-author="${author}">
        <p>${author}</p>
        <div class="textco txt-body">${text}</div>
      </div>
      <button class="delete-comment">Delete</button>
    `;

    return commentElement;
  }

  onSubmit(callback) {
    this.onSubmitCallback = callback;
  }
}

customElements.define('comments-component', CommentsComponent);
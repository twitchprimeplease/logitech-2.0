class usercomment extends HTMLElement{
constructor(){
    super();
    this.image= this.getAttribute('image')
    this.auhtor= this.getAttribute('author')
    this.comment= this.getAttribute('comment')
   
}

connectedCallback(){
    this.render();
}

static get observedAttributes(){
    return ['image', 'author', 'comment']
}

attributeChangedCallback(propName, oldvalue, newValue){
    this[propName] = newValue;
    this.render();

}

render() {
    this.innerHTML = `
    <!-- <link rel="stylesheet" href="./styles.css"> -->
    <div id="comments-list">
            <div class="comment-container">
            <div class="profileone">
                <img src= "${this.image}"width="15%>
                </div>
                <div class ="container-info-comm">
            <div class="comment headline" data-author="${this.author}">
                <p>${this.author}</p>
                <div class="textco txt-body"> ${this.comment}</div>
            </div>
    </div>`
console.log(this.comment);
}

}


customElements.define('user-commment', usercomment);
export default usercomment;
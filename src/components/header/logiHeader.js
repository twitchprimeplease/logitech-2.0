class logiHeader extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- <link rel="stylesheet" href="/src/Components/header/logiHeaderStyles.css"> -->
            <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="/src/images/natha-img/logitech-logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link button" href="#">DISCOVER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button" href="/product-list/">PRODUCTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button" href="#">CONTACT</a>
                        </li>
                        </ul>
                        <button type="button" id="btn-nav" class="btn-outline-primary button">GET STARTED</button>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}

customElements.define('logi-header', logiHeader);
export default logiHeader;
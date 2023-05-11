import './styles.css';
class galleryMasterSeries extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
        <!-- <link rel="stylesheet" href="/Components/galleryMasterSeries/styles.css"> -->
        <section class="master-series-section">
            <article class="master-series-gallery">
                <figure class="gallery-img-1">
                    <img src="images/Mel/mx-keys-mini-top-mac-us.webp" alt="">
                </figure>

                <figure class="gallery-img-2">
                    <img src="images/Mel/mx-anywhere-3-for-mac-product-gallery-pale-gray-top.webp" alt="">
                </figure>

                <figure class="gallery-img-3">
                    <img src="images/Mel/mx-master-3s-for-mac-mouse-top-view-pale-grey.webp" alt="">
                </figure>

                <figure class="gallery-img-4">
                    <img src="images/Mel/mx-master-3s-mouse-top-view-black.webp" alt="">
                </figure>

                <figure class="gallery-img-5">
                    <img src="images/Mel/mx-anywhere-3-product-gallery-rose-rear.webp" alt="">
                </figure>
            </article>
            <aside class="gallery-aside">
                <div>
                    <h3 class="title-2">MX The Master Series</h3>
                    <p>Enhance your productivity with MX solutions crafted for ergonomic comfort, with Smart Backlighting, MagSpeed scrolling, Track-on-glass sensors, USB-C quick charging, Easy Switch for up to 3 devices, multi-OS compatibility, multi-device flow, and app-specific customizations</p>
                </div>
                <button class="btn btn-primary">VIEW MORE</button>
            </aside>
        </section>
        `
    }
}
//reference https://www.logitech.com/es-roam/mx/master-series.html
customElements.define('gallery-master-series', galleryMasterSeries);
export default galleryMasterSeries;
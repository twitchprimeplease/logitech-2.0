import './enviromenSectionStyle.css';
class environmentSection extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <!-- <link rel="stylesheet" href="/src/Components/environmentSection/enviromenSectionStyle.css"> -->
            <div id="enviroment-section-deskop">
            <div id="title-enviroment">
                <h2 class="title-1">OUR COMMINTMENT TO THE ENVIROMENT</h2>
            </div>

            <div id="enviroment-section-container">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-container">
                        <img src="/images/Mel/post-consumer-recycled-plastic-hero-banner-desktop-v2.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title headline">NEXT LIFE PLASTICS</h5>
                        <p class="card-text footnote">Logitech is innovating to give plastics a second life. Today, many recycled plastic resins are limited to black or grey colors and do not perform in the same way as virgin plastic, which introduces product design challenges.</p>
                    </div>
                    <a href="#" class="btn btn-secondary">LEARN MORE</a>
                </div>

                <div class="card" style="width: 18rem;">
                    <div class="card-img-container">
                        <img src="/images/Mel/sustainability-hero-banner-desktop.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title headline">FUTURE POSITIVE CHALLENGE</h5>
                        <p class="card-text footnote">A technology and engineering challenge for disruptors who have a desire to make a meaningful contribution to a positive future.</p>
                    </div>
                    <a href="#" class="btn btn-secondary">LEARN MORE</a>
                </div>

                <div class="card" style="width: 18rem;">
                    <div class="card-img-container">
                        <img src="/images/Mel/main-banner.webp" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title headline">CLIMATE POSITIVE</h5>
                        <p class="card-text footnote">We’re taking action to help shape a climate positive future.On behalf of future generations, we have to act right now.</p>
                    </div>
                    <a href="#" class="btn btn-secondary">LEARN MORE</a>
                </div>
                </div>
            </div>

        `;
    }
}
customElements.define('environment-section', environmentSection);
export default environmentSection;
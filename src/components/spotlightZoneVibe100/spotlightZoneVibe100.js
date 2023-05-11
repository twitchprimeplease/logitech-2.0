import './styles.css';
class spotlightZoneVibe100 extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
        <!-- <link rel="stylesheet" href="/Components/spotlightZoneVibe100/styles.css"> -->
            <div class="spotlightZone">
                <div class="spotlightZone-content">
                    <img class= "col-5" src="/images/Mel/zone-vibe-100-gallery-graphite-2.webp">
                    <div class="col-3" id="spotlightZone-text">
                        <h2 class="title-2">Our brand new VIBE ZONE 100!</h2>
                        <p class="txt-body">Lightweight, wireless headphones — 
                        professional enough for the office, perfect 
                        for working from home.</p>
                        <button class="btn btn-secondary btn-lg" type="button">DISCOVER ZONE VIBE 100</button>
                    </div>
                </div>
            </div>
            
        `;
    }
}

customElements.define('spotlight-zone-vibe100', spotlightZoneVibe100);
export default spotlightZoneVibe100;
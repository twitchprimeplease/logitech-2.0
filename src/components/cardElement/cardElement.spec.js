import './cardElement.js';

describe('cardElement', () => {
    it('renders component and sets params', () => {

        const name = 'product-name';
        const description = 'Product-description';
        const type = 'product-type';
        const price = 'product-price';

        const section = document.createElement('card-element');
        section.setAttribute('name', name);
        section.setAttribute('description', description);
        section.setAttribute('type', type);
        section.setAttribute('price', price);
        document.body.append(section);

        expect(document.querySelector('h5').textContent).toEqual(type);
        expect(document.querySelector('h3').textContent).toEqual(name);
        expect(document.querySelector('p').textContent).toEqual(description);
        expect(document.querySelector('h4').textContent).toEqual('$' + price);
    })



})
import View from '../views.js';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {

        const template = 
        `
        <h1>Hello World</h1>
        `;

        return template;
    }
}
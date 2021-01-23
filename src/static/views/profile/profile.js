import View from '../views.js';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Profile');
    }

    async getHtml() {

        const template = 
        `
        <h1>Welcome to Profile Page</h1>
        `;

        return template;
    }
}
const Component = require('./component.js');

class Text extends Component {
    render(text) {
        this.text = text;
        return `<text x="50%" y="50%" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${this.color}">${text}</text>`;
    }
}

module.exports = CustomText;

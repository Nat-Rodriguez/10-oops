const Component = require('./component.js');

class Triangle extends Component {
    render() {
        return `<polygon points="50,150 250,150 150,50" fill="${this.color}" stroke="black" stroke-width="2"/>`;
    }
}

class Circle extends Component {
    render() {
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" stroke="black" stroke-width="2"/>`;
    }
}

class Square extends Component {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" stroke="black" stroke-width="2"/>`;
    }
}

module.exports = { Triangle, Circle, Square };

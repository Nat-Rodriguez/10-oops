class Component {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Implement the render() method in child class.');
    }
}

module.exports = Component;

const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const Text = require('./text');
const { Triangle, Circle, Square } = require('./shapes');

class CLI {
    constructor() {
        this.title = '';
        this.shape = '';
        this.text = '';
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter your name.',
                },
            ])
            .then(({ name }) => {
                this.title = `${name}'s Logo`;
                return this.buildLogo();
            })
            .catch((err) => {
                console.log(err);
                console.log('Oh no! Something went wrong!');
            });
    }

    buildLogo() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape:',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter a color or Hexcode for your shape.',
                },
            ])
            .then(({ shape, color }) => {
                let chosenShape;
                if (shape === 'circle') {
                    chosenShape = new Circle();
                } else if (shape === 'triangle') {
                    chosenShape = new Triangle();
                } else if (shape === 'square') {
                    chosenShape = new Square();
                }
                chosenShape.setColor(color);
                this.shape = chosenShape.render();
                return this.buildText();
            });
    }

    buildText() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter 3 letters for your logo.',
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter a color or Hexcode for your text',
                },
            ])
            .then(({ text, color }) => {
                let writtenText = new Text();
                writtenText.setColor(color);
                this.text = writtenText.render(text);
                return this.buildSVG();
            });
    }

    buildSVG() {
        return writeFile(
            join(__dirname, '..', 'output', `${this.title}.svg`),
            createDocument(this.shape, this.text)
        );
    }
}

module.exports = CLI;

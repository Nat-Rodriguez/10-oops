const Shape = require('./shapes');
const Text = require('./text');
function createDocument(shape, text) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape}
  ${text}
</svg>
  `;
}

module.exports = { createDocument };
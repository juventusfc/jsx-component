export default class Text {
  constructor(text) {
    this.rootDom = document.createTextNode(text);
  }

  mountTo(parentDom) {
    parentDom.appendChild(this.rootDom);
  }
}

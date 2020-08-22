export default class Wrapper {
  constructor(type) {
    this.children = [];
    this.rootDom = document.createElement(type);
  }

  get style() {
    return this.rootDom.style;
  }

  addEventListener() {
    this.rootDom.addEventListener(...arguments);
  }

  mountTo(parentDom) {
    parentDom.appendChild(this.rootDom);

    let visit = (children) => {
      for (let child of children) {
        if (Array.isArray(child)) {
          visit(child);
          continue;
        }
        if (typeof child === "string") {
          child = new Text(child);
        }
        child.mountTo(this.rootDom);
      }
    };
    visit(this.children);
  }

  setAttribute(key, value) {
    this.rootDom.setAttribute(key, value);
  }

  appendChild(child) {
    this.children.push(child);
  }
}

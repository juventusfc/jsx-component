import Text from "./Text";
export default class Component {
  constructor() {
    this.rootDom = null;
    this.children = [];
  }

  setAttribute(key, value) {
    this.rootDom.setAttribute(key, value);
  }

  appendChild(child) {
    this.children.push(child);
  }

  mountTo(parentDom) {
    parentDom.appendChild(this.rootDom);

    for (let child of this.children) {
      if (typeof child === "string") {
        child = new Text(child);
      }
      child.mountTo(this.rootDom);
    }
  }
}

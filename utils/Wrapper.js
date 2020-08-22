import Component from "./Component";

export default class Wrapper extends Component {
  constructor(type) {
    super();
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
}

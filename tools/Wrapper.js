import { Text } from "./Text";

class Wrapper {
  constructor(type) {
    this.children = [];
    this.root = document.createElement(type);
  }

  setAttribute(key, value) {
    this.root.setAttribute(key, value);
  }

  appendChild(child) {
    this.children.push(child);
  }

  mountTo(parent) {
    // 本组件的 children 挂在到本组件
    for (let child of this.children) {
      if (typeof child === "string") {
        child = new Text(child);
      }
      child.mountTo(this.root);
    }

    // 将本组件挂在到它的父亲上
    parent.appendChild(this.root);
  }
}

export default Wrapper;

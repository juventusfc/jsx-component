import Component from "./Component";

export default class Wrapper extends Component {
  constructor(type) {
    super();
    this.rootDom = document.createElement(type);
  }
}

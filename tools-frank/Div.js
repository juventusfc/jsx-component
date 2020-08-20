import Component from "./Component";
export default class Div extends Component {
  constructor() {
    super();
    this.rootDom = document.createElement("div");
  }
}

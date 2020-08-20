import Component from "../utils/Component";
export default class Div extends Component {
  constructor() {
    super();
    this.rootDom = document.createElement("div");
  }
}

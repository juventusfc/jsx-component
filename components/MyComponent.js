import { createElement } from "../utils/createElement";
import Component from "../utils/Component";

class MyComponent extends Component {
  mountTo(parent) {
    this.slot = <div></div>;
    for (let child of this.children) {
      this.slot.appendChild(child);
    }

    this.render().mountTo(parent);
  }

  render() {
    return (
      <article>
        <header>***This is Header***</header>
        {this.slot}
        <footer>***This is Footer***</footer>
      </article>
    );
  }
}

export default MyComponent;

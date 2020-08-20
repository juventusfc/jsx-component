import { createElement } from "./utils/createElement";
import Div from "./components/Div";
import MyComponent from "./components/MyComponent";

let component = (
  <div id="outer">
    <MyComponent>
      <div>text text text text</div>
    </MyComponent>
    <div
      id="a"
      class="b"
      style="width:200px; height: 100px; border: solid 1px red;"
    >
      <Div>
        <div>text1</div>
      </Div>
      <p></p>
      <div></div>
      <Div></Div>
    </div>
  </div>
);

component.mountTo(document.body);

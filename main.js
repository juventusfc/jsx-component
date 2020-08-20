import { createElement } from "./tools-frank/createElement";
import Div from "./tools-frank/Div";

// let component = (
//   <Div
//     id="frank"
//     class="frank"
//     style="width: 100px; height: 100px; background-color: green;"
//   ></Div>
// );

// let component = (
//   <div
//     id="frank"
//     class="frank"
//     style="width: 100px; height: 100px; background-color: green;"
//   ></div>
// );

// let component = (
//   <div
//     id="frank"
//     class="frank"
//     style="width: 100px; height: 100px; background-color: green;"
//   >
//     <Div
//       id="frank"
//       class="frank"
//       style="width: 30px; height: 20px; background-color: yellow;"
//     >
//       <span></span>
//     </Div>
//   </div>
// );

let component = (
  <div
    id="frank"
    class="frank"
    style="width: 100px; height: 100px; background-color: green;"
  >
    hello world
  </div>
);
// let component = (
//   <div id="outer">
//     <MyComponent>
//       <div>text text text text</div>
//     </MyComponent>
//     <div
//       id="a"
//       class="b"
//       style="width:200px; height: 100px; border: solid 1px red;"
//     >
//       <Div>
//         <div>text1</div>
//       </Div>
//       <p></p>
//       <div></div>
//       <Div></Div>
//     </div>
//   </div>
// );

component.mountTo(document.body);

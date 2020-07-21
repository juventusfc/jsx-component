import { createElement } from "./tools/createElement";
import Div from "./components/Div";
import MyComponent from "./components/MyComponent";

/** 
// 1. 解决大写的组件
let component = (
  <Div
    name="frank"
    style="width:200px; height: 100px; background-color: red;"
  ></Div>
);

// 2. 解决小写的组件
let component = (
  <div
    name="frank"
    style="width:200px; height: 100px; background-color: red;"
  ></div>
);
*/

// 3. 解决 children 以及嵌套
// let component = (
//   <Div
//     id="large1"
//     style="width:200px; height: 200px; background-color: purple;"
//   >
//     <Div
//       id="middle1"
//       style="width:20px; height: 20px; background-color: blue;"
//     ></Div>
//     <Div
//       id="middle2"
//       style="width:20px; height: 20px; background-color: yellow;"
//     >
//       <Div
//         id="small1"
//         style="width:10px; height: 10px; background-color: red;"
//       ></Div>
//     </Div>
//     <Div
//       id="middle3"
//       style="width:20px; height: 20px; background-color: green;"
//     ></Div>
//   </Div>
// );

// 4. 解决 text
// let component = (
//   <Div name="frank" style="width:200px; height: 100px; background-color: red;">
//     hello world<span>hello again</span>
//     <div>forza juventus</div>
//   </Div>
// );

// 5. 解决 Mycomponent 中还有其他自定义的 header 和 footer
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

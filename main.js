import { createElement } from "./utils/createElement";
// import Div from "./components/Div";
// import MyComponent from "./components/MyComponent";
import VanillaCarousel from "./components/VanillaCarousel";

// let component = (
//   <div id="outer">
//     <VanillaCarousel
//       data={[
//         "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
//         "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
//         "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
//         "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
//       ]}
//     />
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

let component = (
  <VanillaCarousel
    data={[
      "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
      "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
      "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
      "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
    ]}
  />
);

component.mountTo(document.body);

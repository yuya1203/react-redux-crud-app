// import React, {Component} from 'react';
import React from 'react';

// import Reactはjsxをトランスパイル後にReact.createElememntを使用して仮装domを描画するのでjsxを使う場合には必須
// returnするjsxは一つのタグでなければならない
// -><div></div>で囲むと意図しないタグを埋め込まなければならなくなる
// ->その解決方法として<React.Fragmentで囲むとそのタグがdom上で表示されなくなる
// トランスパイルはbabelがやってくれている(jsx->jsへ変換)
// webpackはバンドラー
// componentは二種類
// ->関数コンポーネントとクラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("I am clicked!") }} />
//       </React.Fragment>
//     )


//     // const greeting = "Hi, Tom";
//     // const dom = <h1>{greeting}</h1>;
//     // return dom;
//     // return <h1>Hello, world!!!!!</h1>;
//   }
// }

const App = () => {
  // return <div>Hi!</div>
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

import React, {Component} from 'react';

// import Reactはjsxをトランスパイル後にReact.dom.Renderを使用して仮装domを描画するのでjsxを使う場合には必須
// returnするjsxは一つのタグでなければならない
class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("I am clicked!") }} />
      </div>
    )


    // const greeting = "Hi, Tom";
    // const dom = <h1>{greeting}</h1>;
    // return dom;
    // return <h1>Hello, world!!!!!</h1>;
  }
}

export default App;

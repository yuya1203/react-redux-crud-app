// import React, {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// import Reactはjsxをトランスパイル後にReact.createElememntを使用して仮装domを描画するのでjsxを使う場合には必須
// returnするjsxは一つのタグでなければならない
// -><div></div>で囲むと意図しないタグを埋め込まなければならなくなる
// ->その解決方法として<React.Fragmentで囲むとそのタグがdom上で表示されなくなる
// トランスパイルはbabelがやってくれている(jsx->jsへ変換)
// webpackはバンドラー
// componentは二種類
// ->関数コンポーネントとクラスコンポーネント
// jsx内でjsを使用するときは{}でくくる


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
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname", age: 3 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taoro"} age={10}/>
      <User name={"Hanako"} age={5}/> */}
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}!!!!, and {props.age} years old!</div>
}

// propsに対する方チェックを行う（validation)

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

// propsに初期値を指定できる(defaultProps)
// User.defaultProps = {
//   age: 1
// }

export default App;

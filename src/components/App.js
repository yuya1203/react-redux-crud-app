import React, {Component} from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // 

import { increment, decrement } from '../actions';

// import Reactはjsxをトランスパイル後にReact.createElememntを使用して仮装domを描画するのでjsxを使う場合には必須
// returnするjsxは一つのタグでなければならない
// -><div></div>で囲むと意図しないタグを埋め込まなければならなくなる
// ->その解決方法として<React.Fragmentで囲むとそのタグがdom上で表示されなくなる
// トランスパイルはbabelがやってくれている(jsx->jsへ変換)
// webpackはバンドラー
// componentは二種類
// ->関数コンポーネントとクラスコンポーネント
// jsx内でjsを使用するときは{}でくくる
// props -> 親のコンポーネントから値を渡される, 変更不可能なイミュータブルな値
// state -> コンポーネント内で値を保持する, 変更可能なミュータブルな値
// プログラミングにおいて余計なコードは書かない、使っていないなら消す


// const App = () => (<Counter></Counter>)

class App extends Component {
// class Counter extends Component {
  // reducerで行っているのでコメントアウト
  // constructor(props) {
  //   super(props)
  //   this.state = { count: 0 }
  // }

  // actioncreatorで行っているのでコメントアウト
  // handlePlusButton = () => {
  //   // this.state = { count: this.state.count } 直接stateをいじるのはNG -> いじるときは必ずsetStateを経由する
  //   // setStateを実行するとrenderが自動で実行され再描画してくれる(callbackで実行してくれる)、setStateを使わないと描画する処理も別で書かなければならない→そのためsetStateを経由する
  //   this.setState({ count: this.state.count +1 })
  // }

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count -1})
  // }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        {/* <div>Count: {this.state.count}</div> */}
        <div>Count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// dispatchとは ＝＝＞action発生時にreducerにタイプに応じた状態遷移を実行させる関数
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
// const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)

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

// const App = () => {
//   // return <div>Hi!</div>
//   // const profiles = [
//   //   { name: "Taro", age: 10 },
//   //   { name: "Hanako", age: 5 },
//   //   { name: "Noname", age: 3 },
//   // ]
//   return (
//     <div>
//       {
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index} />
//         })
//       }
//       {/* <User name={"Taoro"} age={10}/>
//       <User name={"Hanako"} age={5}/> */}
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>Hi, I am {props.name}!!!!, and {props.age} years old!</div>
// }

// propsに対する方チェックを行う（validation)

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// }

// propsに初期値を指定できる(defaultProps)
// User.defaultProps = {
//   age: 1
// }

// export default App;

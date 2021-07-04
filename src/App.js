import React from 'react';

// class component는 class이며, react component로부터 확장된다.
// react는 자동적으로 class component의 render method를 실행한다.
// state는 object이다.
// state에는 바꾸고 싶은 data를 넣는다.
// button에는 onClick이라는 prop이 기본적으로 있다.
// this.add()에서 ()는 즉시 함수를 호출해라는 것이고,
// this.add는 click했을 때만 함수를 호출하는 것이다.

//setState를 호출할 때마다 새로운 state로 render메서드를 호출한다.

//life cycle component : 리액트가 component를 생성하는 없애는 방법
//생성: constructor -> render -> componentDidMount
//업데이트: setState호출 -> render -> componentDidUpdate
//죽음: componentWillUnmounting

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('constructor(): hello');
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };
  reset = () => {
    this.setState({ count: 0});
  }
  componentDidMount() {
    console.log('componentDidMount(): component rendered');
  }
  componentDidUpdate() {
    console.log("componentDidUpdate(): I just updated");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount(): byebye");
  }
  render() {
    console.log('Render(): Im rendering');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;

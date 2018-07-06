const noop = function () {};

class App extends React.Component {
  render() {
    return (
      <div>
        <TestTitle />
        <Counter />
      </div>
    );
  }
}


class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.counter = this.counter.bind(this);
  }

  counter() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    const title = (count) ? count + ' clicks' : 'Let\'s Count?' ;

    const buttonProps = {
      title: title,
      onClick: this.counter,
    };

    return (<AwesomeButton {...buttonProps}/>);
  }
}


class AwesomeButton extends React.Component {
  render() {
    const { onClick, title } = this.props;
    const buttonClick = onClick || noop;
    const style = {
      border: 'solid 1px #ccc',
      color: '#999',
      padding: '5px',
      cursor: 'pointer',
      borderRadius: '5px',
    }
    return (<button onClick={buttonClick} style={style}>{title}</button>);
  }
}

class TestTitle extends React.Component {
  render() {
    const style = {
      border: 'solid 1px #ccc',
      color: '#999',
      padding: '5px',
      borderRadius: '5px',
    };
    return (<h1 style={style}>TestTitle</h1>)
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
import React from "react";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: 'block',
      height: '90vh',
      width: '80vw',
      backgroundColor: 'yellow'
    };
    this.displayHandler = this.displayHandler.bind(this);
    console.log("this is the first time !");
  }

  displayHandler() {
    let res = this.state.display === 'block' ? 'none' : 'block';
    this.setState({
      display: res,
      height: '90vh',
      width: '80vw',
      backgroundColor: 'yellow'
    });
    console.log(this.state.display);
  }

  render = () => {
    return (
      <div style={{ paddingLeft: '10%',  textAlign: 'center', alignItems: 'center' }}>
        <button onClick={this.displayHandler}>show/hide</button> <br />
        <div style={this.state}></div>
      </div>
    );
  };
}

export default App;
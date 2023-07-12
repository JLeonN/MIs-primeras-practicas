import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {


  constructor(props){
    super(props);
    this.state = {
      age : 29
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hola { this.props.name }
        </h1>
        <h2>
          Tu edad es de: { this.props.age }
        </h2>
        <button onClick={this.birthday}>
          Cumplir años!
        </button>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age +1
      }
    ))
  }

}


Greeting.propTypes = {
  name: PropTypes.string,
};


export default Greeting;

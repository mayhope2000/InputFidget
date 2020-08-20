import React, {Component} from 'react';


  // Add a constructor with a state
class ButtonInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      button: null
    }
  };
handleChange = (event) => {
    this.setState({button: event.target.value});
  }
  // Add a render function which returns JSX
     render() {
    return (
  
  <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" onClick={this.handleChange} value="Click me!" className="btn"/>
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: </label>
                    <span name="buttonOutput">{this.state.button}</span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    )
     }
}

export default ButtonInput;

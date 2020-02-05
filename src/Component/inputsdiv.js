import React , {Component} from 'react';

class InputForm extends Component {

  state = {
      username: '',
      drawNo:'',
      numToCheck:''
    };

  mySubmitHandler = (event) => {
    event.preventDefault();
    // alert("You are submitting " + this.state.drawNo + this.state.numToCheck);
    this.props.updateDrawNo(this.state.drawNo);
    this.props.updateNumToCheck(this.state.numToCheck);
  };
  drawChangeHandler = (event) => {
    this.setState({drawNo: event.target.value});
  };
  numCheckChangeHandler = (event) => {
    this.setState({numToCheck: event.target.value});
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        Draw No: <input type="text" name="drawno" onChange={this.drawChangeHandler}/> <br/>
        Num To Check: <input type="text" name="numToCheck" onChange={this.numCheckChangeHandler}/><br/>
        <input
          type='submit'
        />
      </form>
    );
  }
}

export default InputForm;
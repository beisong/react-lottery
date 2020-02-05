import React , {Component} from 'react';
import Aux from '../Auxiliary'
import axios from '../axios'
import InputDivs from './inputsdiv'

class Result extends Component {

  state={
    Draw:null,
    NumToCheck:null,
    Result:null,
    loading:false,
    error:false
  };


  getData() {
    axios.get('http://192.168.1.183:3030/4d/'+this.state.Draw)
      .then(res=>{
        console.log(res.data);
        this.checkWinnings(res.data, parseInt(this.state.NumToCheck));
      })
      .catch(err=>{
        console.log("AXIOS API ERROR" + err);
      });
  }

  checkWinnings(data, numToCheck){
    let result = "Did not win";
    if(data.first === numToCheck){
      result = "first"
    }
    if(data.second === numToCheck){
      result = "second"
    }
    if(data.third === numToCheck){
      result = "third"
    }

    var start_arr = data.starter.split(',').map(Number);
    if(start_arr.includes(numToCheck)){
      result = "starter"
    }

    var consolation_arr = data.consolation.split(',').map(Number);
    if(consolation_arr.includes(numToCheck)){
      result = "consolation"
    }

    console.log(result);
    this.setState({Result:result});

    return result;
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    if(this.state.Draw){
      this.getData()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.Draw!==nextState.Draw||this.state.NumToCheck!==nextState.NumToCheck||this.state.Result!==nextState.Result;
  }

  updateDrawNoHandler = (drawNo) =>{
    this.setState({Draw:drawNo});
  };
  updateNumToCheckHandler = (numToCheck) =>{
    this.setState({NumToCheck:numToCheck});
  };

  render(){
    return (
      <Aux>
        <h3>Draw No: {this.state.Draw}</h3>
        <h3>Checking: {this.state.NumToCheck}</h3>
        <h3>Result: {this.state.Result}</h3>
        <InputDivs updateDrawNo={this.updateDrawNoHandler} updateNumToCheck={this.updateNumToCheckHandler}/>
      </Aux>
    );
  }
}


export default Result;
import React from 'react';
// import styles from'./App.module.scss';




class App extends React.Component{
  state={
    a__number:0,
    b__number:0,
    result:0
  }

  

  add__a=(e)=>{
    this.setState({
      a__number:e.target.value,
    })
    
  }

  add__b=(e)=>{
    e.preventDefault();
    this.setState({
      b__number:e.target.value,
    })
  }

  handleclickAdd=(e)=>{
    e.preventDefault();
    this.setState({
      result:parseInt(this.state.a__number) + parseInt(this.state.b__number)
    })
    console.log(this.state.a__number,this.state.b__number)
  }

  handleclickSubstract=(e)=>{
    e.preventDefault();
    this.setState({
      result:parseInt(this.state.a__number) - parseInt(this.state.b__number)
    })
    console.log(this.state.a__number,this.state.b__number)
  }
  handleclickMultiplication=(e)=>{
    e.preventDefault();
    this.setState({
      result:parseInt(this.state.a__number) * parseInt(this.state.b__number)
    })
    console.log(this.state.a__number,this.state.b__number)
  }
  handleclickDivision=(e)=>{
    e.preventDefault();
    if(this.state.b__number==="0"){
     alert("nie dzielimy przez 0");
     this.setState({
       a__number:0,
       b__number:0,
       result:0
     })
    }else{
      this.setState({
        result:parseInt(this.state.a__number) / parseInt(this.state.b__number)
      })
  }
}

handleclickReset=()=>{
  this.setState({
    result:0,
  });
}
  

  render(){
    return(
      
      <form>
      <input name="a_number" type="number" placeholder="wpisz liczbę od 0-9" required onChange={this.add__a}></input>
    <input name="b_number" type="number" placeholder="wpisz liczbę od 0-9" required onChange={this.add__b}></input>
    <button name="add" type="text" onClick={this.handleclickAdd}>+</button>
    <button name="substract" type="text" onClick={this.handleclickSubstract}>-</button>
    <button name="multiplication" type="text" onClick={this.handleclickMultiplication}>*</button>
    <button name="division" type="text" onClick={this.handleclickDivision}>/</button>
    <button name="reset" type="text" onClick={this.handleclickReset}>C</button>




    <div>{this.state.result}</div>
    </form>
    )
  }
  
}

export default App;

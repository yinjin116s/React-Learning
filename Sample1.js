/*const Button = (props) => {
  return (
    <button>{props.label}</button>
  );
};*/

class Button extends React.Component {
	/*constructor(props){
  	super(props);
    this.state={ counter: 0}
  }*/

  state = { counter: 0 }
  
  handleClick = () =>{
  	//this.state.counter++
    /*this.setState({
    	counter: this.state.counter + 1
    })*/
    this.setState((prevState) => ({
    	counter: prevState.counter + 1
    }));
  };
  
  render() {
  	return(
    <button onClick={this.handleClick}>
    {this.state.counter}
    </button>
    );
  }
}
ReactDOM.render(<Button />,mountNode);

import React from 'react';
//import React, {Component} from 'react'; -- this will pull component off react

class SearchBar extends React.Component {
  // just name function in es6 to set it to 
  //render: render()
  constructor(props){
  	super(props);
  	//this.state cannot be used outside out
  	//constructor function
  	this.state = {term:'asdf'};
  }
  render() {
    return (
      <div className="search-bar">
      <input 
        value = {this.state.term}
        onChange = {this.onInputChange.bind(this)} />
      <br/>
      <span>{this.state.term}</span>
      </div>    
    )
  }
  // notice no comma separating methods
  onInputChange(e) {
  	this.setState({term:e.target.value});
    this.props.onSearchTermChange(e.target.value);
  }
}
export default SearchBar;


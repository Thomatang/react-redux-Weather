import React, { Component } from "react";
//link fetch weather action creator to searchbar
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

      //declare what value of the input is, setting up our state
    this.state = { term: ''};
    // bind the context when using a callback function that uses 'this'
    this.onInputChange = this.onInputChange.bind(this);
    // bind context from form submit callback function
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault(); //tells browser not to submit the form
    
    // go fetch weather data
    this.props.fetchWeather(this.state.term);
    //cause component to re render and empty search bar after search
    this.setState({term:''});
  }

  render() {
    return (
      <form 
      onSubmit={this.onFormSubmit} 
      className="input-group">
        <input
          placeholder='Get a 5 day forecast in your favorite cities' 
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}        
        />
        <span className="input-group-btn">
         <button type="submit" className="btn btn-secondary">Submit </button>
        </span>
      </form>
    );
  }
}

//hook up fetch weather to our searchbar container by mapping it to props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//pass in null for first argument because function always need to be put second
export default connect(null, mapDispatchToProps)(SearchBar);

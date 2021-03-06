import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
  render() {
    return (
      <div className='searchField'>
        <input
          className='search'
          type='text'
          placeholder='Enter the Name of the Dish'
          onChange={this.props.change}
        />
        <button className='searchButton' onClick={this.props.click}>
          {this.props.buttonTitle}
        </button>
      </div>
    );
  }
}
export default Search;

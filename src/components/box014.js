import React, { Component } from 'react';


class Box014 extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      pageCount: null
    }}
  render() {
    const pageCount = this.props.pageCount
    return (
      <div>
        <p>Total finished cycle</p>
        <p>{this.props.pageCount}</p>       
      </div>
    );
  }
}

export default Box014;
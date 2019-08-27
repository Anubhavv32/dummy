import React, { Component } from 'react';

class Box011 extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      pageCount:[],
      currentPage:0,
      data1:null,
      data2:[]
    }}
  render() {
    const currentPage = this.props.currentPage

   const data1 = this.props.pageElements1
   const data2 = this.props.pageElements2
   console.log("12",data1,currentPage)
   var temp = 0
   
   if(data1){

   Object.keys(data1[currentPage]).map((dataNew,i) => {
    var str = "TAILER"
   if(dataNew.match(/TAILER/g)){
    console.log("qqq11",dataNew)
     temp += 1
   }
   console.log("qqq",temp)
  })}
    return (
      <div>
        <p>No. of machine working</p>
        <p>{temp}</p>
      </div>
    );
  }
}

export default Box011;
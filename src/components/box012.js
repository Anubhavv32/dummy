
import React, { Component } from 'react';

class Box012 extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      pageCount:[],
      currentPage:0,
      data1:[],
      data2:[]
    }}

  render() {
    const currentPage = this.props.currentPage

   const data1 = this.props.pageElements1
   const data2 = this.props.pageElements2
   console.log("12",data1,currentPage)

   var temp = 0
   if(data1){
    console.log('1212',data1)
    Object.keys(data1[currentPage]).map((dataNew,i) => {
      if(dataNew !== 'VB2' && dataNew !== 'VB3' && dataNew !== 'VB2Count' && dataNew !== 'VB3Count' ){
        var str = Object.values(data1[currentPage])[i] +'';
        var array1 = str.split(":");
        var b = 0;
        var c = 1;
        for(var j = 2;j>=0;j--){

          b = b + array1[j]*c;

          c = c*60;

      }
        console.log("ggg",data1)
    temp = temp + b;
      }
    })
    }
    return (
      <div>
       <p>Last cycle time</p>
       <p>{temp}</p>

      </div>
    );
  }
}

export default Box012;
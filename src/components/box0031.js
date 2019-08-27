import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export default class Box002 extends Component {
  constructor(props){
    super(props)
    this.state = {
      count1:0,
      currentPage:0,
      pageCount1: null,
      pageElements1:[],
      data1:null,
      dataNew: null,
      data:[],
      chartData1 :[],
      chartData2:[]
    }
    
    const currentPage = this.props.currentPage;
    const data1 = this.props.pageElements1;
    const data2 = this.props.pageElements2;
    console.log("attaaa",this.props.pageElements2)
    console.log("attaaa",data1)

       
       
       
  
    
  }
  componentWillMount(){
    const currentPage = this.props.currentPage;
    const data1 = this.props.pageElements1;
    const data2 = this.props.pageElements2;
    console.log("attaaa1",this.props.pageElements2)
    console.log("attaaa1",data1)
  } 
  componentDidMount(){
    const currentPage = this.props.currentPage;
    const data1 = this.props.pageElements1;
    const data2 = this.props.pageElements2;
    console.log("did",this.props)
    console.log("did",data1)}

    render() {
        const currentPage = this.props.currentPage;
            const data1 = this.props.pageElements1;
            const data2 = this.props.pageElements2;
            console.log("attaaa3",this.props.pageElements2)
            console.log("did",this.props)
    

        return (
           
         <div>hello world</div>
          
        );
    }
}
     
 
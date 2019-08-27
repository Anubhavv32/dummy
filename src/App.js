
import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Box011 from './components/box011';
import Box012 from './components/box012';
import Box013 from './components/box013';
import Box014 from './components/box014';
import Box002 from './components/box02';
import Box031 from './components/box031';
import Box032 from './components/Box032';

export default class App extends Component{
  constructor(props) {
    super(props) 
    this.state = { 
        count:0,
        currentPage:0,
        pageCount1: null,
        pageElements:[],
        pageElements1:[],
        pageElements2:[],
        length1:null,
        length2:null,
        data : []
        
        
        // pageCount2: null
      


    }
 }
  

  componentDidMount() {
    axios({
      method:'GET',
      headers:{'Access-Control-Allow-Origin': '*', },
      url: 'http://159.65.146.25:5001/getDashboardData',
      params: {"type":"N"}
    }).then((res)=> {
       console.log(
         "response",res.data
       )
    
        this.setState({ pageElements:res.data.result,pageCount1:(res.data.result["S1"]).length,
        pageCount2:(res.data.result["S2"]).length
         
          },()=>{
            
        })
      })
  }
  handlePageCount1=()=>{
var mutable = this.state.pageElements.S1.length
this.setState({count:mutable})
}
    
    handleforwardbutton1=()=>{
     
      var mutable = this.state.currentPage
       if(mutable<this.state.pageCount1-1){
         let nextpage = mutable + 1
         this.setState({currentPage:nextpage})}

      //   else if(mutable === this.state.pageCount1) {document.getElementById('myBtn').disabled = true; }
      //  else {document.getElementById('myBtnn').disabled = false; }
      }
      handleforwardbutton2=()=>{
     
        var mutable = this.state.currentPage
         if(mutable<this.state.pageCount2-1 ){
           let nextpage = mutable + 1
           this.setState({currentPage:nextpage})
         }
      //  else if(mutable === this.state.pageCount2 ) {document.getElementById('myBtn').disabled = true; }
      //  else {document.getElementById('myBtnn').disabled = false; }
        }
    
    handlebackwardbutton=()=>{
      var mutable = this.state.currentPage

       if(mutable >0 && mutable < this.state.pageCount1){
         let previouspage = mutable - 1
         this.setState({currentPage:previouspage})
       }
      //  else if(this.state.currentPage === 0)
      //   {document.getElementById('myBtnn').disabled = true; }
      //   else {document.getElementById('myBtnn').disabled = false; }
    }
  

    render(){

  const currentPage = this.state.currentPage
  const data =this.state.pageElements
  console.log("aaaamma",data.S1,"hh")
  console.log("aaaamma",data.S2,"hh")
  const pageCount1 = this.state.pageCount1
  console.log(pageCount1,"pc11")

 
  return (

    
     
        <div className = "main-box">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <div className="header-box"><Header /></div>
          <div className = "box1" >

        
          <div className = "box11" ><Box011 pageElements1 = {this.state.pageElements.S1}
          pageElements2 = {this.state.pageElements.S2}
          currentPage = {this.state.currentPage} /></div>
      

          <div  className = "box11"><Box012  pageElements1 = {this.state.pageElements.S1}
          pageElements2 = {this.state.pageElements.S2}
          currentPage = {this.state.currentPage}/></div>

          <div className = "box11"><Box013 /></div>

          <div className = "box14"><Box014 pageCount = {this.state.pageCount1} /></div>

          </div>

          <div className = "box2"  >
          <Box002 count = {this.state.count} 
          currentPage = {this.state.currentPage}
          pageCount = {this.state.pageCount}
          pageElements1 = {this.state.pageElements.S1}
          pageElements2 = {this.state.pageElements.S2} /> 
            
           </div>  
        
          
          
          
          <div className = "box3">

          <div className = "box31"><Box031 
          count = {this.state.count} 
          currentPage = {this.state.currentPage}
          pageCount = {this.state.pageCount}
          pageElements1 = {this.state.pageElements.S1}
          pageElements2 = {this.state.pageElements.S2}/></div>

           <div className = "box32"><Box032  
          handleforwardbutton1 = {this.handleforwardbutton1}
          handleforwardbutton2 = {this.handleforwardbutton2}
          handlebackwardbutton = {this.handlebackwardbutton}
          count ={this.state.count}
          currentPage = {this.state.currentPage}
          pageCount1 = {this.state.pageCount1}
          pageCount2 = {this.state.pageCount2}
          pageElements1 = {this.state.pageElements.S1}
          pageElements2 = {this.state.pageElements.S2} 
          // pageCount2 = {this.state.pageCount2}
          /></div>  

          </div>
        </div>
       

    
  )}
}
          
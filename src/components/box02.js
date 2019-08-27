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
 
    
  }

        
    render() {
    
      const currentPage = this.props.currentPage;
      const data1 = this.props.pageElements1;
      const data2 = this.props.pageElements2;
      

      if(data1){
        var a = [];
      Object.keys(data1[currentPage]).map((dataNew,i) => {
       
        var str = Object.values(data1[currentPage])[i] +'';
        var array1 = str.split(":");
        var b = 0;
        var c = 1;
   
        for(var j = 2;j>=0;j--){

            b = b + array1[j]*c;

            c = c*60;

        }
      
          a.push(b);
        
      })
      
      console.log("a",a)
      var d =  Object.keys(data1[currentPage])
      d = d.reverse()
      d.splice(0,4)
      d = d.reverse()

     
       this.state.chartData1 = {
        labels:d,   
        datasets:
        [
          {
            
            data: a,
            backgroundColor:"green",
            label:'Time(sec)',
          }
        ],
        
     
       };
      
    }
    

      else if(data2){
        var x =[]
      
        Object.keys(data2[currentPage]).map((dataNew,i) => {
         
          var str = Object.values(data2[currentPage])[i] +'';
          var array1 = str.split(":");
          var b = 0;
          var c = 1;
          for(var j = 2;j>=0;j--){
  
              b = b + array1[j]*c;
  
              c = c*60;
  
          }
        
            x.push(b);
          
           
            console.log("uuu",x)
        })
        var d =  Object.keys(data2[currentPage])
        d = d.reverse()
        d.splice(0,4)
        d = d.reverse()
  
         console.log("jjj",Object.keys(data2[currentPage]))

         this.state.chartData2={
          labels:d,   
          datasets:
          [
            {
              
              data: x,
              backgroundColor:"green",
              label:'Time(sec)',
              
               
           
            }
          ],
          
        }
    
 
     }

       
    

        return (
         
          <div className="box02">
          <div className ="box002">
             
             <Bar 
                  
                  data={this.state.chartData1}
                  options={{
                   
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                      },
                
                  }}
                  width={10}
                  height={5}
        
                />
                      </div>
                   
                      <div className ="box002">
                    <Bar
                  
                  data={this.state.chartData2}
                  options={{
                   
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                      },
                
                  }}
                  width={10}
                  height={5}
        
                />
  
            </div></div>
        );
    }
}
     
 
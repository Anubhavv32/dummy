import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './box.css';


export default class Box031 extends Component {
  constructor(props){
    super(props)
    this.state = {
      count1:0,
      currentPage:0,
      pageCount1: null,
      pageElements1:[],
      data1:null,
      dataNew: null,
   
      chartData1 :[],
      chartData2:[],
      a:[],
    
    }
 
    
  }

        
    render() {
    
  const currentPage = this.props.currentPage;
  const data1 = this.props.pageElements1;
  const data2 = this.props.pageElements2;
  console.log("attaaa",this.props.pageElements2)
  console.log("attaaa",data1)
  

      if(data1){
        var a = [];
        var a2 = [];
        var d = [];
        var a3 = []
       
      Object.keys(data1[currentPage]).map((dataNew,i) => {
        if(dataNew!=='VB2' && dataNew!== 'VB3'&& dataNew!== 'VB2Count'&&dataNew!== 'VB3Count'){
             
        var str = Object.values(data1[currentPage])[i] +'';
        var array1 = str.split(":");
        var b = 0;
        var c = 1;
        d.push(dataNew)
        console.log("d",d)
        for(var j = 2;j>=0;j--){

            b = b + array1[j]*c;

            c = c*60;

        }

          a.push(b);
        
        
            a2.push(0)
            a3.push(0)
            console.log("uuuaaaaa2",a2,a)
          }
         
          else if(dataNew ==='VB2'|| dataNew === 'VB3'){
            console.log('datanew',dataNew)
           
        var str3 = Object.values(data1[currentPage])[i] +'';
        var array13 = str3.split(":");
        var c1 = 1;
        var b1= 0;
       for(var j1 = 2;j1>=0;j1--){

              b1 = b1 + array13[j1]*c1;
  
              c1 = c1*60;
  
          }
  
         
            a2.push(b1);
            
            console.log("uuuaaaaa2333",a2)
        
          }
        
      
      }) 
      
      a2.splice(0,2)
      console.log("kkkk",a3,a)
       console.log("zzzz",data1)
       console.log("jjj",Object.keys(data1[currentPage]))
       console.log("print",a2,a)


      a.reverse()
      a2.reverse()
      for(var k = 1;k>=0;k--){
        a3.push((a[k]-a2[k]))
      }
      a.reverse()
      a2.reverse()
      a3.splice(0,2)
      console.log("a3",a3)

    var chartData1 = {
        labels:d,   
        datasets:
        [
          {
            data: a2,
            backgroundColor:"green",
            label:'Machine Time(Sec)',
          },
          {
            data: a3,
            backgroundColor:"orange",
            label:'Manual Time(Sec)',
          },
          {
            data: a,
            backgroundColor:"lightblue",
            label:'Total Time(sec)',
           },
           
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
  console.log("print",chartData1);
        return (
         
          <div >
          <div className ="box031">
            <Bar 
                  data={chartData1}
                  options={{
                  legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                      },
                     }}
                  width={100}
                  height={50}
                  />
                      </div>
                   
                      <div  className ="box031">
                    <Bar
                  
                  data={this.state.chartData2}
                  options={{
                   
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                      },
                
                  }}
                  width={100}
                  height={50}
        
                />
  
            </div>
        </div>
        
        );
    }
   
}
     

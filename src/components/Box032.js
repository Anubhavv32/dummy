import React, { Component } from 'react';
import './box.css';
import ReactToExcel from 'react-html-table-to-excel';





 export default class Box032 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
           students: [
              { sensorId: 'Wasifa', time:21 },
              { sensorId: 'Wasifb', time: 21 },
              { sensorId: 'Wasifc', time: 21 },
              { sensorId: 'Wasifv', time: 21 }
           ],
            items: [],
            item1:{},
            count1:0,
            currentPage:0,
            data1:[],
            // pageElements1:[],
            // pageElements2:[],
            data2:[],
            pageCount1:0
         
        }
     }
    render() {
     const currentPage = this.props.currentPage
     const pageCount1 = this.props.pageCount1
     console.log(pageCount1,"pc1")

   const data1 = this.props.pageElements1
   const data2 = this.props.pageElements2
   
      // console.log("aaa",data1, "ooo", data2)

   // const pageCount1 = this.state.data1.length
    
     if( this.props.pageElements1){
      // console.log("zzzz",Object.values(data1[currentPage]))
    
      return (
         <div className="table-box">
            <div>
         <div className='tableBox'>
         <table id='table-to-xls'> 
        <tr>
                        <th>Sensor Id</th>
                        <th>Time</th>
                       
                      </tr> 

                 
            {Object.keys(data1[currentPage]).length !==0 ? 
            Object.keys(data1[currentPage]).map((dataNew,i) => {             
                     if(dataNew !== "VB2Count" && dataNew !== "VB3Count"
                      &&dataNew !== "VB2" && dataNew !== "VB3" ) {
                        console.log("zzzz",Object.values(data1[currentPage])[i])
               return(                    
                  <tr>
                  <td>{dataNew}</td>
                  <td>{Object.values(data1[currentPage])[i]}</td>
                 
                  </tr>
   
       
                        
               )
                   }}
              ) : 'Loading'}
          
              
          </table> 
          <ReactToExcel
          table = "table-to-xls"
          filename = "excelFile"
          sheet = "sheet 1"
          buttonText="Download"
          className="btn"/>
        </div>
        
      
        
           <h3> Page {this.props.currentPage +1} of {this.props.pageCount1}</h3>
           <div>
              
          
                
              <button className="previous" onClick={this.props.handlebackwardbutton} 
              id ="myBtnn" disabled = {currentPage === 0} >&laquo; Previous</button>
              <button className="next" onClick={this.props.handleforwardbutton1} 
              id ="myBtn"disabled= {(currentPage+1) === pageCount1} >Next &raquo;</button>
              
           </div> 

           </div></div>
       
   
       ) ;
       
                  }
         
               
  
               



   if(data2){ 
     
      return (
         <div>
         <div>
         <div className='tableBox'>
         <table id='students'> 
        <tr>
                        <th>Sensor Id</th>
                        <th>Time(sec)</th>
                       
                      </tr> 

                 
            {Object.keys(data2[currentPage]).length !==0?
             Object.keys(data2[currentPage]).map((dataNew,i) =>{
                console.log("sssss",data2,"DDD",)
                      
               return(                    
                  <tr>
                  <td>{dataNew}</td>
                  <td>{Object.values(data2[currentPage])[i]}</td>
                 
                </tr>
   
       
                        
               )
                   }
              ) : 'Loading'}
          
              
          </table>
        </div>
           
       <h3> Page {this.props.currentPage +1} of {this.props.pageCount}</h3>
       <div >
          <button className="previous" onClick={this.props.handlebackwardbutton2}
          disabled = {currentPage === 0}>&laquo; Previous</button>
          <button className="next" onClick={this.props.handleforwardbutton}
          disabled= {(currentPage+1) === pageCount1} >Next &raquo;</button>
       </div> 
   </div>
   </div>  ) 
       
          }
         
         
               
     else{
        return (
         <div>
              
              
       
         <table id='students'>
           <h1>Loading</h1>
         </table>
       
      </div>
        )
     }
    
     
   }

    }

 
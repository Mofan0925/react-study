import React from 'react';
import Dailog from '../component/Dialog'


export default class DialogPage extends React.Component{
constructor(props){
    super(props)
    this.state={
        showDailog:false
    }
}
 
    render(){
        let {showDailog}=this.state;
          return (<div className="dialogPage"> 
            <p>DialogPage</p>
              <button onClick={()=>{this.setState({'showDailog':!showDailog})}}>strogle</button>       
              {showDailog && <Dailog/>}
          </div>)
    }
}
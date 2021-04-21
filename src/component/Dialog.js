import React from 'react'
import {createPortal} from 'react-dom'

export default class Dailog extends React.Component{
   constructor(props){
      super(props)
      let doc=window.document;
      this.node=doc.createElement('div');
      doc.body.appendChild(this.node);
   }
   componentWillUnmount(){
    if(this.node){
        window.document.body.removeChild(this.node)
    }
   }
    render(){
        return (
            createPortal(<div className="dailog">Dialo</div>,this.node)
       )
    }
}
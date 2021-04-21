import React from 'react';
import store from '../store/index'


export default class ReduxPage extends React.Component{
    constructor(props){
        super(props)
        this.add=()=>{
            store.dispatch({type:'ADD'});
        }
    }
    reset(){
        store.dispatch({type:'RESET'});
    }

    minus=()=>{
        store.dispatch({type:'MINUS'});
    } 
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    render(){
        return <div className="storePage">
                  <p>ReduxPage</p>              
                  <button onClick={this.add}>Add</button>
                  <button onClick={this.minus}>MINUS</button>
                  <button onClick={this.reset}>归零</button>
                  <b>{store.getState()}</b>               
        </div>

    }
}
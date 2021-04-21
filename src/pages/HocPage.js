import React, { Component} from 'react'



//定义一个高阶组件
let foo=(Cmp)=>(props)=>{
    return (<div style={{border:'2px solid red',padding:'15px','margin':'20px'}}>
        <Cmp {...props}/>
    </div>)
}

function Child(props){
    return <div>Child</div>
} 

//组件的链式调用
const Foo=foo(foo(Child))


/*装饰器是es7的语言，它只适合class组件中，是为了实现类组件的链式调用*/
@foo
@foo
class Child2 extends React.Component{
    render(){
        return <div>Child</div>
    }    
} 



export default class HocPage1 extends Component{
    render() {
        return (
            <div className="hocpage">
               <h3>高阶组件</h3>
               <Foo/>
               <div  style={{'margin-bottom':'90px'}}>
                  <p>class组件的装饰器</p>
                  <Child2/>
               </div>
            </div>
        )
    }
}

import react from 'react';

export default class ClassComponent extends react.Component{
    constructor(props){
        super(props);
        // 使用state属性维护状态，在构造函数中初始化状态
         this.state={
             date: new Date(),
         }
    }
    componentDidMount(){    
        // 组件挂载之后启动定时器器每秒更更新状态
        this.timer=setInterval(()=>{
        
            // 使用setState方法更新状态
            this.setState({
                date:new Date()
            })
        },1000)
    }
   // 组件卸载前停止定时器器
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    componentDidUpdate() {
       console.log("componentDidUpdate");
    }
    render(){
        //let {date}=this.state;
        return(<div>
               <h3>ClassComponent</h3>
               <p>{this.state.date.toLocaleTimeString()}</p>
            </div>)
    }
}
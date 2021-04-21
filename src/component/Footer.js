import React  from 'react'



let menu=[{icon:'icon-shouye1',context:'首页'},
          {icon:'icon-faxian',context:'发现'},
          {icon:'icon-dingdan',context:'订单'},
          {icon:'icon-wode',context:'我的'},
   ]

export default class Footer extends React.Component {
    constructor(){
        super();
        this.state={active:0}
    }
    render() {
        let {active}=this.state;
        return (
            <div className='footer'>
                <ul>
                {menu.map((item, index) => {
                     return (<li className={active===index?'selected':''} onClick={()=>{this.setState({active:index})}}><span className={`icon iconfont ${item.icon}`}></span>{item.context}</li>)
                  }
                )}
            </ul></div>)
    }
}

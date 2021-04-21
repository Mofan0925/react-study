import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";
export default class AntdFromPage extends Component {
  constructor(props){
       super(props)
       this.state={user:'',password:'',checked:'false'}
  }
  componentDidMount() {
    this.submit()
 
}
submit() {
   axios.get("/login").then((res)=>{
        
    }).catch((error)=>{
        console.log('error', error) 
    })
}
    render() {    
     let {checked}=this.state;
        return (      
            <div className="andtdstyle">
                <Form>
                    <Form.Item label="用户：">
                        <Input type="text"
                               placeholder="请输入你的用户名"
                               value={this.state.user} 
                               onChange={(e)=>{
                                this.setState({user:e.target.value});
                               }}
                               />
                    </Form.Item>
                    <Form.Item label="密码：" >
                       <Input name="password" type="password" placeholder="请输入你的密码" value={this.state.password} 
                        onChange={(e)=>{
                          this.setState({password:e.target.value});
                         }}
                       />
                    </Form.Item>   
                    <Form.Item name="remember" valuePropName="checked" onChange={(e)=>{
                        this.setState({checked:!checked});
                    }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>                
                    <Form.Item>
                        <Button type="primary" onClick={this.submit}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}



import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


class CreateFormAntdPage extends Component {
    render() {
        console.log("props", this.props.form);
        return (      
            <div className="andtdstyle">
                <Form>
                    <Form.Item label="用户：">
                        <Input type="text" placeholder="请输入你的用户名"  />
                    </Form.Item>
                    <Form.Item label="密码：" >
                       <Input type="password" placeholder="请输入你的密码"  />
                    </Form.Item>   
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>                
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CreateFormAntdPage;


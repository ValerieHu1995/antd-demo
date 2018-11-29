//login界面
import React from 'react';
import { withRouter } from 'react-router';
import { Form, Icon, Input, Button, Checkbox, Radio, notification } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;


const openNotificationWithIcon = (type) => {
    if(type == "success"){
        notification[type]({
        duration: 3,
        message: '注册成功',
        description: '跳转到登录页面...',
        });
    }
    else if(type == "warning"){
        notification[type]({
            duration: 3,
            message: '注册失败',
            description: '请重新注册',
        }); 
    }

 };

class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let register_url = ""
        let params = {}
        if(values.userType=="user"){
            register_url = 'http://123.207.227.186:8080/user'
            params.nickname = values.userName.split("@")[0]
        }
        else if(values.userType=="shangjia"){
            register_url = 'http://123.207.227.186:8080/company'
            params.companyName = values.userName.split("@")[0]
        }
        params.email = values.userName
        params.password = values.password
        params.balance = 0
        params.telphone = "1234567890"
        axios.post(register_url, params).then(response => {
          if(response.data.flag){
            if(response.data.code == 100000){
            this.props.history.push({ pathname: '/'});
            openNotificationWithIcon('success')
            }
            else openNotificationWithIcon('warning')
          }
          else openNotificationWithIcon('warning')
        }).catch(exception => console.log(exception))

      }
    });
  }
  backLogin(){
    notification['success']({
        duration: 3,
        message: '登录页面',
        description: '',
    });
    this.props.history.push({ pathname: '/'});
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       this.props.history.push({ pathname: '/main', state: { userName: values.userName, userType:values.userType } });
  //       console.log('Received values of radio: ', values);
  //     }
  //   });
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{  padding:'100px 100px 100px 100px' }}>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ margin: 'auto auto', width: '400px', height: '200px' }}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userType', {
            initialValue: 'user',
            rules: [{ required: true, message: 'Please input your userType' }],
          })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="user">用户</Radio.Button>
              <Radio.Button value="shangjia">商家</Radio.Button>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}

          <br></br>
          <Button style={{marginRight: 30}} type="primary" htmlType="submit" className="login-form-button" >注册</Button>
          <Button type="default"  className="login-form-button" onClick={this.backLogin.bind(this)}>回去登录</Button>
          <br></br>
        </FormItem>
      </Form>
      </div>
    );
  }
}



const MyRegister = Form.create()(RegisterForm);

export default withRouter(MyRegister);




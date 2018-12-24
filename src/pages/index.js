//login界面
import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Radio, notification } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FormItem = Form.Item;

const myaxios = axios.create({
  baseURL: 'http://123.207.227.186:8080',
  timeout: 5000,
  withCredentials: true
});

const AppRouter = () => {
  <Router>
  <div>
    <Route path="/" exact component={MyLogin} />
    <Route path="/register" component={MyRegister} />
    <Route path="/main" component={Main} />
  </div>
</Router>
}


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let login_url = ""
        let params = {}
        if(values.userType=="user"){
          login_url = 'http://123.207.227.186:8080/login/user'
        }
        else if(values.userType=="shangjia"){
          login_url = 'http://123.207.227.186:8080/login/company'
        }
        else if(values.userType=="admin"){
          login_url = 'http://123.207.227.186:8080/login/admin'
        }
        params.email = values.userName
        params.password = values.password
        myaxios.post(login_url, params).then(response => {
          if(response.data.flag){
            if(response.data.code == 100000){
            notification['success']({
              duration: 1,
              message: '登录成功',
              description: '',
            });
            this.props.history.push({ pathname: '/main', state: { userName: values.userName, userType:values.userType } });
            }
            else{
              notification['warning']({
                duration: 2,
                message: '登录失败',
                description: '请输入正确的账号密码',
              });
            }
          }
          else{
            notification['warning']({
              duration: 2,
              message: '登录失败',
              description: '请输入正确的账号密码',
            });

          }
        }).catch(exception => console.log(exception))


      }
    });
  }
  handleRegister(){
    notification['success']({
      duration: 3,
      message: '注册页面',
      description: '',
    });
    this.props.history.push({ pathname: '/register'});
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
              <Radio.Button value="admin">管理员</Radio.Button>
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
          <Button style={{marginRight: 50}} type="primary" htmlType="submit" className="login-form-button"  >登录</Button>
          <Button type="default"  className="login-form-button" onClick={this.handleRegister.bind(this)}>注册</Button>
          <br></br>
        </FormItem>
      </Form>
      </div>
    );
  }
}



const MyLogin = Form.create()(LoginForm);

export default MyLogin;
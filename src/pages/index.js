//login界面
import React from 'react';
import { withRouter } from 'react-router';
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push({ pathname: '/main', state: { userName: values.userName, userType:values.userType } });
        console.log('Received values of radio: ', values);
      }
    });
  }

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
          <a className="login-form-forgot" href="">Forgot password</a>
          <br></br>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          <br></br>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const MyLogin = Form.create()(LoginForm);

export default withRouter(MyLogin);
//【钱包管理-充值】页面
import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;



class InnerRechargeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { $class: 'token.UserRecharge', user: 'user1@email.com',  logs:[]}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.tokenNum = parseInt(values.tokenNum);
        values.$class=this.state.$class
        values.user=this.state.user
        values.logs = this.state.logs
        console.log('Received values of form: ', values);
        axios.post('http://47.98.41.183:3000/api/UserRecharge', values).then(response => alert("充值申请返回信息：\n"+JSON.stringify(response.data))).catch(exception => console.log(exception))
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    }
    return (
      <div>
        <Form layout='horizontal' onSubmit={this.handleSubmit}>
        <FormItem label="充值 ID" {...formItemLayout} >
          {getFieldDecorator('rechargeID', {
            rules: [{
              required: true, message: '请输入充值ID',
            }],
          })(
            <Input placeholder="rechage???不能重名（待删除）" />
          )}
         </FormItem>


          <FormItem label="充值金额" {...formItemLayout} >
          {getFieldDecorator('tokenNum', {
            rules: [{
                required: true,
                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                message: '请输入充值金额'
            }],
          })(
            <Input placeholder="100" />
          )}
         </FormItem>

          <FormItem {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">充值</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

const RechargeForm = Form.create()(InnerRechargeForm);


class UserQbglCz extends React.Component {
  render(){
    return (
      <div>
          <RechargeForm />
      </div>
    );
  }
}
export default UserQbglCz;
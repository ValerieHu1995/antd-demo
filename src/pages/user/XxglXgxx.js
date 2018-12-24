//【信息管理-个人信息】页面
import React from 'react';
import {InfoChange} from '../../apis/api'
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;




class ChangeUserInfoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: props.userName, nickname:''};
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          values.nickname = values.nickname;
          values.email = this.state.email;
          console.log('Received values of form: ', values);
          InfoChange(values).then(response => alert("保存成功：\n"+JSON.stringify(response.data))).catch(exception => console.log(exception))
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
          <FormItem label="昵称" {...formItemLayout} >
            {getFieldDecorator('nickname', {
              rules: [{
                required: true, message: '请输入昵称',
              }],
            })(
              <Input placeholder="可修改昵称" />
            )}
           </FormItem>
     
  
  
            <FormItem {...buttonItemLayout}>
              <Button type="primary" htmlType="submit">保存修改</Button>
            </FormItem>
  
          </Form>
        </div>
      );
    }
  }
  
  const UserInfoForm = Form.create()(ChangeUserInfoForm);

  class UserXxglXgxx extends React.Component {
    render(){
      return (
        <div>
            <UserInfoForm />
        </div>
      );
    }
  }
  export default UserXxglXgxx;
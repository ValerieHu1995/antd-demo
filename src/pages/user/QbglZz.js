//【钱包管理-转账】页面
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


const FormItem = Form.Item;



class InnerTransferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { $class: 'token.TokenTransferU_U', fromuser: 'user1@email.com'}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.transferNum = parseInt(values.transferNum);
        values.$class=this.state.$class
        values.fromuser=this.state.fromuser
        console.log('Received values of form: ', values);
        axios.post('http://47.98.41.183:3000/api/TokenTransferU_U ', values).then(response => alert("用户转账返回信息：\n"+JSON.stringify(response.data))).catch(exception => console.log(exception))
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
          {getFieldDecorator('transferID', {
            rules: [{
              required: true, message: '请输入转账ID',
            }],
          })(
            <Input placeholder="transfer???不能重名（待删除）" />
          )}
         </FormItem>
         <FormItem label="转账给：" {...formItemLayout} >
          {getFieldDecorator('to', {
            rules: [{
              required: true, message: '请输入目标用户 ID',
            }],
          })(
            <Input placeholder="user5@email.com" />
          )}
         </FormItem>


          <FormItem label="转账金额" {...formItemLayout} >
          {getFieldDecorator('transferNum', {
            rules: [{
                required: true,
                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                message: '请输入转账金额'
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

const TransferForm = Form.create()(InnerTransferForm);

class UserQbglZz extends React.Component {
  render(){
    return (
      <div>
          <TransferForm />
      </div>
    );
  }
}
export default UserQbglZz;
//【课程信息-发布课程】页面
import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class InnerClassPublishForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { $class: 'token.Service', company: 'company1@email.com', serviceType:0}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.servicePrice = parseInt(values.servicePrice);
        values.$class=this.state.$class
        values.serviceType=this.state.serviceType
        values.company=this.state.company
        console.log('Received values of form: ', values);
        axios.post('http://47.98.41.183:3000/api/Service', values).then(response => alert("发布课程返回信息：\n"+JSON.stringify(response.data))).catch(exception => console.log(exception))
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

          <FormItem label="课程 ID" {...formItemLayout} >
          {getFieldDecorator('serviceID', {
            rules: [{
              required: true, message: '请输入课程 ID',
            }],
          })(
            <Input placeholder="service???不能重名（待删除）" />
          )}
         </FormItem>

         <FormItem label="课程名称" {...formItemLayout} >
          {getFieldDecorator('serviceName', {
            rules: [{
              required: true, message: '请输入课程名称',
            }],
          })(
            <Input placeholder="C++???" />
          )}
         </FormItem>

          <FormItem label="课程价格" {...formItemLayout} >
          {getFieldDecorator('servicePrice', {
            rules: [{
                required: true,
                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                message: '请输入课程价格'
            }],
          })(
            <Input placeholder="10" />
          )}
         </FormItem>

          <FormItem {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

const ClassPublish = Form.create()(InnerClassPublishForm);


class ShangjiaKcxxFbkc extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
          <ClassPublish props={this.state}/>
      </div>
    );
  }
}
export default ShangjiaKcxxFbkc;
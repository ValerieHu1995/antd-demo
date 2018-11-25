//【待办任务-充值提现】页面
import React from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import reqwest from 'reqwest';
import {test_url} from '../../util/Request';

class AdminDbrwCztx extends React.Component {
  constructor(props){
    super(props);
    // this.setState({
    //   user: props.userName
    // })
    this.state = {
      data: [],
      pagination: {},
      loading: false,
      user: props.userName
    };
  }

  columns = [{
    title: 'TokenRechargeID',
    dataIndex: 'tokenRechargeID',
    width: '16%',
  }, {
    title: 'ConfirmBank',
    dataIndex: 'confirmBank',
    width: '16%',
  }, {
    title: 'TokenNum',
    dataIndex: 'tokenNum',
    width: '16%',
  }, {
    title: 'User',
    dataIndex: 'user',
    width: '16%',
  }, {
    title: '',
    dataIndex: '',
    render: (e) => <Button type="primary" onClick={this.agree}>同意</Button>,
    width: '6%',
  }, {
    title: '',
    dataIndex: '',
    render: (e) => <Button type="danger" onClick={this.disagree}>拒绝</Button>,
    width: '6%',
  }];

  agree = (event) => {
    // 获取指定行
    const parentNode = event.target.parentNode.parentNode;
    // rechargeID
    const rechargeID = parentNode.getAttribute('data-row-key');

    var values = [];
    values.rechargeID = rechargeID;

    axios.post(test_url + 'CheckUserRecharge', values)
      .then(function(response) {
        if (response.status === 200) {
          console.log('成功');
        }
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  disagree = (event) => {
    // 获取指定行
    const parentNode = event.target.parentNode.parentNode;
    // rechargeID
    const rechargeID = parentNode.getAttribute('data-row-key');

    var values = [];
    values.rechargeID = rechargeID;

    axios.post(test_url + 'RejectUserRecharge', values)
      .then(function(response) {
        if (response.status === 200) {
          console.log('成功');
        }
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    // console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      // url: 'https://randomuser.me/api',
      url: test_url + 'queries/GetUserTokenRechargeN',
      method: 'get',
      data: {
        // results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      console.log(data);
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      // pagination.total = 200;
      pagination.total = 10;
      this.setState({
        loading: false,
        // data: data.results,
        data: data,
        pagination,
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render(){
    return (
      <div>
        <Table
          columns={this.columns}
          rowKey={record => record.tokenRechargeID}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          style={{width: '1000px'}}
        />
      </div>
    );
  }
}
export default AdminDbrwCztx;
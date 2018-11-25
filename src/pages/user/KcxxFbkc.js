//【课程信息-发布课程】页面
import React from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import reqwest from 'reqwest';
import {test_url} from '../../util/Request';

class UserKcxxFbkc extends React.Component {
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
    title: 'ServiceID',
    dataIndex: 'serviceID',
    width: '16%',
  }, {
    title: 'ServiceName',
    dataIndex: 'serviceName',
    width: '16%',
  }, {
    title: 'ServicePrice',
    dataIndex: 'servicePrice',
    width: '16%',
  }, {
    title: 'ServiceType',
    dataIndex: 'serviceType',
    width: '16%',
  }, {
    title: 'Company',
    dataIndex: 'company',
    width: '16%',
  }, {
    title: 'Action',
    dataIndex: '',
    render: (e) => <Button type="primary" onClick={this.buykc}>购买</Button>,
    width: '16%',
  }];

  // state = {
  //   data: [],
  //   pagination: {},
  //   loading: false,
  // };

  buykc = (event) => {
    // 获取指定行
    const parentNode = event.target.parentNode.parentNode;
    // service id
    const service_id = parentNode.getAttribute('data-row-key');
    // user name
    const user = '123';

    var values = [];
    values.service_id = service_id;
    values.user = user;
    // console.log(values);

    axios.post(test_url + 'UserConsumeService', values)
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
      url: test_url + 'Service',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      // console.log(data);
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
          rowKey={record => record.serviceID}
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
export default UserKcxxFbkc;
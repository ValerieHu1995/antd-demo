//【课程信息-查看课程】页面
import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import reqwest from 'reqwest';
import {test_url} from '../../util/Request';

const columns = [{
  title: 'ServiceID',
  dataIndex: 'serviceID',
  // sorter: true,
  // render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'ServiceName',
  dataIndex: 'serviceName',
  // filters: [
  //   { text: 'Male', value: 'male' },
  //   { text: 'Female', value: 'female' },
  // ],
  width: '20%',
}, {
  title: 'ServicePrice',
  dataIndex: 'servicePrice',
  width: '20%',
}, {
  title: 'ServiceType',
  dataIndex: 'serviceType',
  width: '20%',
}, {
  title: 'Company',
  dataIndex: 'company',
  width: '20%',
}];

class UserKcxxCkkc extends React.Component {

  state = {
    data: [],
    pagination: {},
    loading: false,
  };

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
          columns={columns}
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
export default UserKcxxCkkc;
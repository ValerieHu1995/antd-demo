//【课程信息-查看课程】页面
import React from 'react';
import { Table } from 'antd';
import reqwest from 'reqwest';
import {test_url} from '../../util/Request';

class ShangjiaKcxxCkkc extends React.Component {
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
    width: '20%',
  }, {
    title: 'ServiceName',
    dataIndex: 'serviceName',
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

  render() {
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
export default ShangjiaKcxxCkkc;
import React from 'react';
import { Breadcrumb } from 'antd';
class MyBreadcrumb extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent:'flex-start', marginLeft: '100px' }}>
        <Breadcrumb style={{ margin: '20px 0px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

      </div>
    );
  }
}
export default MyBreadcrumb;
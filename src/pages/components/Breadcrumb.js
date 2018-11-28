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
        <image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543320677076&di=3979c29a323c25e53486523a88e04bda&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071231%2F0017029450803123_b.jpg"  />

      </div>
    );
  }
}
export default MyBreadcrumb;
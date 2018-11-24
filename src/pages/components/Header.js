import React from 'react';
import { Menu, Avatar, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">我要干嘛</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">我要干嘛</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">注销</a>
      </Menu.Item>
    </Menu>
  );

class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ position: 'fixed', width: '100%', zIndex: '1000', lineHeight: '64px' }}
                >
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button shape='circle-outline' size='default' icon='user'></Button>
                    </Dropdown> 
                </Menu>
            </div>
        );
    }
}

export default MyHeader;
import React from 'react';
import { Menu, Avatar, Dropdown, Button, message, notification } from 'antd';
import {userLogout} from '../../apis/api'
import { withRouter } from 'react-router'; 





class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userType:props.userType, email:props.email, visible: false};
    }
    
    onClick = ({ key }) => {
        if(key == 'logout'){
            if(this.state.userType=='user'){
                userLogout({
                    "email": this.state.email
                })
                notification['success']({
                    duration: 3,
                    message: '登出成功',
                    description: '',
                  });
                this.props.history.push({pathname: '/'});
            }
            
        }
      };
      
    menu = (
    <Menu onClick={this.onClick}>
        <Menu.Item key="logout">登出</Menu.Item>
    </Menu>
    );

    render() {
        return (
            <div>
            
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{  position: 'fixed', width: '100%', zIndex: '1000', lineHeight: '64px' }}
                >

                    <Dropdown overlay={this.menu} placement="bottomCenter" >
                        <Button style={{marginLeft:700}} shape='circle-outline' size='default' icon='user' ></Button>

                    </Dropdown> 

                    <img src={require("../../assets/logo.jpg")} style={{width:40,marginLeft:30}}></img>


                </Menu>

            </div>
        );
    }
}

export default withRouter(MyHeader);
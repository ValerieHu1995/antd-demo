//【信息管理-个人信息】页面
import React from 'react';
import axios from 'axios';
import {backend_url} from '../../util/Request';
import {requestUserGrxx} from '../../apis/api'
import { Card, Avatar } from 'antd';
const { Meta } = Card;

class UserXxglGrxx extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, state_: '0', email: 'test', des: 'test', nickname:'',email:'', accountBalance:'' };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  componentDidMount() {
    var params = {
      "email" : this.props.userName
    }
    
    requestUserGrxx(params)
      .then(function(response) {
        if (response.status === 200) {
          this.setState({nickname: response.data.data.nickname+""});
          this.setState({email: response.data.data.email});
          this.setState({accountBalance: response.data.data.balance+""});
          this.onChange(this.state);
        }
      }.bind(this))
  }

    render(){
      const { loading } = this.state;
      return (
        <div style={{display: 'flex', justifyContent:'space-between', width:'1000px' }}>
          {/* <Switch checked={!loading} onChange={this.onChange} /> */}
          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Nick Name"
              description={this.state.nickname}
            />
          </Card>

          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Email"
              description={this.state.email}
            />
          </Card>

          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="AccountBalance"
              description={this.state.accountBalance}
            />
          </Card>

        </div>
      );
    }
  }
  export default UserXxglGrxx;
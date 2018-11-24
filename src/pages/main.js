//layout界面
import React from 'react';
import MyMenu from './components/Menu';
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import MyBreadcrumb from './components/Breadcrumb';
import MyBody from './demo'
import { Layout  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class MyLayout extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userType:props.location.state.userType,
      userPart:''
    }
  }
  goto(e){
    this.setState({
      userPart:e.key
    })
  }
  render(){
    return (
      <div>
        <Layout>
        <Sider><MyMenu userType={this.state.userType} onGoto={this.goto.bind(this)}/></Sider>
        <Layout>
          <Header><MyHeader /></Header>
          <Content >
            <MyBreadcrumb userType={this.state.userType} userPart={this.state.userPart}/>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap',justifyContent:'space-between', margin: '0px 50px 0px 100px' }}>
              <MyBody userType={this.state.userType} userPart={this.state.userPart}/>
            </div>
          </Content>
          <Footer><MyFooter /></Footer>
        </Layout>
      </Layout>
      </div>
    );
  }
}
export default MyLayout;

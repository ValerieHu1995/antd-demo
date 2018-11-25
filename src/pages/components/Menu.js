import React from 'react';
import { withRouter } from 'react-router';
import {
  Menu,
  Icon
} from 'antd';
const SubMenu = Menu.SubMenu;
//admin
const MyMenuItemAdmin = [
  {
    name:'待办任务',
    icon:'clock-circle',
    item:[
      {
        index:'AdminDbrwZzsh',
        name:'资质审核',
        icon:'check-square'
      },{
        index:'AdminDbrwYccl',
        name:'异常处理',
        icon:'close-square'
      },{
        index:'AdminDbrwCztx',
        name:'充值提现',
        icon:'plus-square'
      }
    ]
  },
  // {
  //   name:'审批任务',
  //   icon:'issues-close',
  //   item:[
  //     {
  //       index:'AdminSprwZzsh',
  //       name:'资质审核',
  //       icon:'check-square'
  //     },{
  //       index:'AdminSprwYccl',
  //       name:'异常处理',
  //       icon:'close-square'
  //     },{
  //       index:'AdminSprwCztx',
  //       name:'充值提现',
  //       icon:'plus-square'
  //     }
  //   ]
  // },
  {
    name:'已办任务',
    icon:'check-circle',
    item:[
      {
        index:'AdminYbrwZzsh',
        name:'资质审核',
        icon:'check-square'
      },{
        index:'AdminYbrwYccl',
        name:'异常处理',
        icon:'close-square'
      },{
        index:'AdminYbrwCztx',
        name:'充值提现',
        icon:'plus-square'
      }
    ]
  }
]
//shangjia
const MyMenuItemShangjia = [
  {
    name:'人员管理',
    icon:'user',
    item:[
      {
        index:'ShangjiaXxglGrxx',
        name:'个人信息',
        icon:'idcard'
      },{
        index:'ShangjiaXxglZzsh',
        name:'资质审核',
        icon:'contacts'
      }
    ]
  },{
    name:'课程信息',
    icon:'solution',
    item:[
      {
        index:'ShangjiaKcxxFbkc',
        name:'发布课程',
        icon:'audit'
      },{
        index:'ShangjiaKcxxCkkc',
        name:'查看课程',
        icon:'file-search'
      }
    ]
  }
]
//user
const MyMenuItemUser = [
  {
    name:'信息管理',
    icon:'user',
    item:[
      {
        index:'UserXxglGrxx',
        name:'个人信息',
        icon:'idcard'
      }
    ]
  },{
    name:'课程信息',
    icon:'solution',
    item:[
      {
        index:'UserKcxxFbkc',
        name:'购买课程',
        icon:'shopping'
      },{
        index:'UserKcxxCkkc',
        name:'查看课程',
        icon:'file-search'
      }
    ]
  },{
    name:'钱包管理',
    icon:'wallet',
    item:[
      {
        index:'UserQbglCz',
        name:'充值',
        icon:'pay-circle'
      },{
        index:'UserQbglZz',
        name:'转账',
        icon:'money-collect'
      }
    ]
  }
]
class MyMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      theme: 'light',
      mode: 'inline',
      userType: props.userType
    }
  }
  goto(e){
    this.props.onGoto(e);
  }
  render() {
    let s=[];
    let stuff=[];
    let stuffItem = [];
    if(this.state.userType==='admin'){
      s.push(<Menu
        style={{ position: 'fixed', height: '100%', width: 250 }}
        defaultOpenKeys={[MyMenuItemAdmin[0].name.toString()]}
        defaultSelectedKeys={[MyMenuItemAdmin[0].item[0].index.toString()]}
        mode={this.state.mode}
        theme={this.state.theme}>{stuff}</Menu>);
      for(var i=0;i<MyMenuItemAdmin.length;i++){
        stuffItem[i]=[];
        stuff.push(<SubMenu key={MyMenuItemAdmin[i].name} title={<span><Icon type={MyMenuItemAdmin[i].icon}/><span>{MyMenuItemAdmin[i].name}</span></span>}>{stuffItem[i]}</SubMenu>);
        for(var j=0;j<MyMenuItemAdmin[i].item.length;j++){
          stuffItem[i].push(<Menu.Item key={MyMenuItemAdmin[i].item[j].index} onClick={this.goto.bind(this)}><Icon type={MyMenuItemAdmin[i].item[j].icon} />{MyMenuItemAdmin[i].item[j].name}</Menu.Item>);
        }
      }
    }
    else if(this.state.userType==='shangjia'){
      s.push(<Menu
        style={{ position: 'fixed', height: '100%', width: 250 }}
        defaultOpenKeys={[MyMenuItemShangjia[0].name.toString()]}
        defaultSelectedKeys={[MyMenuItemShangjia[0].item[0].index.toString()]}
        mode={this.state.mode}
        theme={this.state.theme}>{stuff}</Menu>);
      for(var i=0;i<MyMenuItemShangjia.length;i++){
        stuffItem[i]=[];
        stuff.push(<SubMenu key={MyMenuItemShangjia[i].name} title={<span><Icon type={MyMenuItemShangjia[i].icon}/><span>{MyMenuItemShangjia[i].name}</span></span>}>{stuffItem[i]}</SubMenu>);
        for(var j=0;j<MyMenuItemShangjia[i].item.length;j++){
          stuffItem[i].push(<Menu.Item key={MyMenuItemShangjia[i].item[j].index} onClick={this.goto.bind(this)}><Icon type={MyMenuItemShangjia[i].item[j].icon} />{MyMenuItemShangjia[i].item[j].name}</Menu.Item>);
        }
      }
    }
    else if(this.state.userType==='user'){
      s.push(<Menu
        style={{ position: 'fixed', height: '100%', width: 250 }}
        defaultOpenKeys={[MyMenuItemUser[0].name.toString()]}
        defaultSelectedKeys={[MyMenuItemUser[0].item[0].index.toString()]}
        mode={this.state.mode}
        theme={this.state.theme}>{stuff}</Menu>);
      for(var i=0;i<MyMenuItemUser.length;i++){
        stuffItem[i]=[];
        stuff.push(<SubMenu key={MyMenuItemUser[i].name} title={<span><Icon type={MyMenuItemUser[i].icon}/><span>{MyMenuItemUser[i].name}</span></span>}>{stuffItem[i]}</SubMenu>);
        for(var j=0;j<MyMenuItemUser[i].item.length;j++){
          stuffItem[i].push(<Menu.Item key={MyMenuItemUser[i].item[j].index} onClick={this.goto.bind(this)}><Icon type={MyMenuItemUser[i].item[j].icon} />{MyMenuItemUser[i].item[j].name}</Menu.Item>);
        }
      }
    }
    else{
      s.push(<Menu
        style={{ position: 'fixed', height: '100%', width: 250 }}
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0-0']}
        mode={this.state.mode}
        theme={this.state.theme}>{stuff}</Menu>);
        stuffItem[i]=[];
        stuff.push(<SubMenu key='0' title={<span><Icon type='frown'/><span>未知地方</span></span>}>{stuffItem[i]}</SubMenu>);
        stuffItem[i].push(<Menu.Item key='0-0' onClick={this.goto.bind(this)}><Icon type='frown' />知识荒原</Menu.Item>);
    }
    return (
      <div>{s}</div>
    );
  }
}

export default withRouter(MyMenu);

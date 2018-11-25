//待办任务资质审核页面
import React from 'react';
import Page404 from './Page404';
//admin
import AdminDbrwZzsh from './admin/DbrwZzsh';
import AdminDbrwYccl from './admin/DbrwYccl';
import AdminDbrwCztx from './admin/DbrwCztx';
import AdminSprwZzsh from './admin/SprwZzsh';
import AdminSprwYccl from './admin/SprwYccl';
import AdminSprwCztx from './admin/SprwCztx';
import AdminYbrwZzsh from './admin/YbrwZzsh';
import AdminYbrwYccl from './admin/YbrwYccl';
import AdminYbrwCztx from './admin/YbrwCztx';
//shangjia
import ShangjiaXxglGrxx from './shangjia/XxglGrxx';
import ShangjiaXxglZzsh from './shangjia/XxglZzsh';
import ShangjiaKcxxFbkc from './shangjia/KcxxFbkc';
import ShangjiaKcxxCkkc from './shangjia/KcxxCkkc';
//user
import UserXxglGrxx from './user/XxglGrxx';
import UserKcxxFbkc from './user/KcxxFbkc';
import UserKcxxCkkc from './user/KcxxCkkc';
import UserQbglCz from './user/QbglCz';
import UserQbglZz from './user/QbglZz';

class MyBody extends React.Component {
    constructor(props){
      super(props);
      this.state={
        userName:props.userName,
        userType:props.userType,
        userPart:props.userPart
      }
    }
    render(){
        let part = [];
        if(this.props.userPart===''){
            if(this.props.userType==='admin'){part.push(<AdminDbrwZzsh userName={this.state.userName}/>);}
            if(this.props.userType==='shangjia'){part.push(<ShangjiaXxglGrxx userName={this.state.userName}/>);}
            if(this.props.userType==='user'){part.push(<UserXxglGrxx userName={this.state.userName}/>);}
        }
        //admin
        if(this.props.userPart==='AdminDbrwZzsh'){part.push(<AdminDbrwZzsh userName={this.state.userName}/>);}
        if(this.props.userPart==='AdminDbrwYccl'){part.push(<AdminDbrwYccl userName={this.state.userName}/>);}
        if(this.props.userPart==='AdminDbrwCztx'){part.push(<AdminDbrwCztx userName={this.state.userName}/>);}
        // if(this.props.userPart==='AdminSprwZzsh'){part.push(<AdminSprwZzsh userName={this.state.userName}/>);}
        // if(this.props.userPart==='AdminSprwYccl'){part.push(<AdminSprwYccl userName={this.state.userName}/>);}
        // if(this.props.userPart==='AdminSprwCztx'){part.push(<AdminSprwCztx userName={this.state.userName}/>);}
        if(this.props.userPart==='AdminYbrwZzsh'){part.push(<AdminYbrwZzsh userName={this.state.userName}/>);}
        if(this.props.userPart==='AdminYbrwYccl'){part.push(<AdminYbrwYccl userName={this.state.userName}/>);}
        if(this.props.userPart==='AdminYbrwCztx'){part.push(<AdminYbrwCztx userName={this.state.userName}/>);}
        //shangjia
        if(this.props.userPart==='ShangjiaXxglGrxx'){part.push(<ShangjiaXxglGrxx userName={this.state.userName}/>);}
        if(this.props.userPart==='ShangjiaXxglZzsh'){part.push(<ShangjiaXxglZzsh userName={this.state.userName}/>);}
        if(this.props.userPart==='ShangjiaKcxxFbkc'){part.push(<ShangjiaKcxxFbkc userName={this.state.userName}/>);}
        if(this.props.userPart==='ShangjiaKcxxCkkc'){part.push(<ShangjiaKcxxCkkc userName={this.state.userName}/>);}
        //user
        if(this.props.userPart==='UserXxglGrxx'){part.push(<UserXxglGrxx userName={this.state.userName}/>);}
        if(this.props.userPart==='UserKcxxFbkc'){part.push(<UserKcxxFbkc userName={this.state.userName}/>);}
        if(this.props.userPart==='UserKcxxCkkc'){part.push(<UserKcxxCkkc userName={this.state.userName}/>);}
        if(this.props.userPart==='UserQbglCz'){part.push(<UserQbglCz userName={this.state.userName}/>);}
        if(this.props.userPart==='UserQbglZz'){part.push(<UserQbglZz userName={this.state.userName}/>);}
        //404
        if(this.props.userPart==='404'){part.push(<Page404 userName={this.state.userName}/>);}
        return (
            <div>
                {part}
            </div>
        );
    }
  }
  export default MyBody;
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
        userType:props.userType,
        userPart:props.userPart
      }
    }
    render(){
        let part = [];
        if(this.props.userPart===''){
            if(this.props.userType==='admin'){part.push(<AdminDbrwZzsh/>);}
            if(this.props.userType==='shangjia'){part.push(<ShangjiaXxglGrxx/>);}
            if(this.props.userType==='user'){part.push(<UserXxglGrxx/>);}
        }
        //admin
        if(this.props.userPart==='AdminDbrwZzsh'){part.push(<AdminDbrwZzsh/>);}
        if(this.props.userPart==='AdminDbrwYccl'){part.push(<AdminDbrwYccl/>);}
        if(this.props.userPart==='AdminDbrwCztx'){part.push(<AdminDbrwCztx/>);}
        if(this.props.userPart==='AdminSprwZzsh'){part.push(<AdminSprwZzsh/>);}
        if(this.props.userPart==='AdminSprwYccl'){part.push(<AdminSprwYccl/>);}
        if(this.props.userPart==='AdminSprwCztx'){part.push(<AdminSprwCztx/>);}
        if(this.props.userPart==='AdminYbrwZzsh'){part.push(<AdminYbrwZzsh/>);}
        if(this.props.userPart==='AdminYbrwYccl'){part.push(<AdminYbrwYccl/>);}
        if(this.props.userPart==='AdminYbrwCztx'){part.push(<AdminYbrwCztx/>);}
        //shangjia
        if(this.props.userPart==='ShangjiaXxglGrxx'){part.push(<ShangjiaXxglGrxx/>);}
        if(this.props.userPart==='ShangjiaXxglZzsh'){part.push(<ShangjiaXxglZzsh/>);}
        if(this.props.userPart==='ShangjiaKcxxFbkc'){part.push(<ShangjiaKcxxFbkc/>);}
        if(this.props.userPart==='ShangjiaKcxxCkkc'){part.push(<ShangjiaKcxxCkkc/>);}
        //user
        if(this.props.userPart==='UserXxglGrxx'){part.push(<UserXxglGrxx/>);}
        if(this.props.userPart==='UserKcxxFbkc'){part.push(<UserKcxxFbkc/>);}
        if(this.props.userPart==='UserKcxxCkkc'){part.push(<UserKcxxCkkc/>);}
        if(this.props.userPart==='UserQbglCz'){part.push(<UserQbglCz/>);}
        if(this.props.userPart==='UserQbglZz'){part.push(<UserQbglZz/>);}
        //404
        if(this.props.userPart==='404'){part.push(<Page404/>);}
        return (
            <div>
                {part}
            </div>
        );
    }
  }
  export default MyBody;
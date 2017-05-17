import React,{Component} from 'react'

class AdminHeader extends Component{
  render(){
    return (
      <div className="m-adminHeader">
        <div className="logo">
          <img src="./images/logo.png" alt="锋帆logo"/>
        </div>
        <ul className="adminNav">
          <li><a>后台首页</a></li>
          <li><a>视频管理</a></li>
          <li><a>招聘管理</a></li>
          <li><a>面试题管理</a></li>
        </ul>
      </div>
    )
  }
}

export default AdminHeader

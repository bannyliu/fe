import React,{Component} from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router'



class AdminHeader extends Component{
  handleClick = (e) => {
   console.log('click ', e)
  }

  render(){
    return (
      <div className="m-adminHeader">
        <div className="logo">
          <img src="./images/logo.png" alt="锋帆logo"/>
        </div>
        <ul className="adminNav">
          <li><Link to="/admin">后台首页</Link></li>
          <li><Link to="/admin/video">视频管理</Link></li>
          <li><Link to="/admin/recruit">招聘管理</Link></li>
          <li><Link to="/admin/interviewq">面试题管理</Link></li>
        </ul>
      </div>
    )
  }
}

export default AdminHeader

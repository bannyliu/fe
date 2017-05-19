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
        <div className="home"><Link to="/admin">后台首页</Link></div>
        <ul className="adminNav">
          <li>
            <Link to="/admin/video" activeClassName="active">视频管理</Link>
            <ul>
              <li><Link to="/admin/video/classify">分类管理</Link></li>
              <li><Link to="/admin/video/list">内容列表</Link></li>
              <li><Link to="/admin/video/add">内容添加</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/admin/recruit" activeClassName="active">招聘管理</Link>
              <ul>
                <li><Link to="/admin/recruit/list">内容列表</Link></li>
                <li><Link to="/admin/recruit/add">内容添加</Link></li>
              </ul>
          </li>
            <li>
            <Link to="/admin/interviewq" activeClassName="active">面试题管理</Link>
              <ul>
                <li><Link to="/admin/interviewq/list">内容列表</Link></li>
                <li><Link to="/admin/interviewq/add">内容添加</Link></li>
              </ul>
            </li>
        </ul>
      </div>
    )
  }
}

export default AdminHeader

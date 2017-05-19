import React, {Component} from 'react'
import {Link} from 'react-router'

import { Input } from 'antd'
const Search = Input.Search

class Header extends Component {
  render() {
    return (
      <div className="m-header">
        <div className="logo">
          <img src="./images/logo.png" alt="锋帆logo"/>
        </div>
        <ul className="nav">
          <li><Link to="/index/list" activeClassName="active">首页</Link></li>
          <li><Link to="/video/list" activeClassName="active">视频</Link></li>
          <li><Link to="/qanda/list" activeClassName="active">问答</Link></li>
          <li><Link to="/job/list" activeClassName="active">招聘</Link></li>
        </ul>
        <div className="user">
          <span>
            <img src="./images/user-icon.png" />
          </span>
          <span>3</span>
        </div>
        <Link to="/search/list" className="search">
          <Search
            placeholder="请输入关键字"
            onSearch={value => console.log(value)}
            />
        </Link>
      </div>
    )
  }
}

export default Header

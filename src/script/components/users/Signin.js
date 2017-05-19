import React, {Component} from 'react'

import {Link} from "react-router"

import utilAxios from "../../utils/axios.util.js"
console.log(utilAxios)//ok

export default class Signin extends Component {
	constructor(props) {
    super(props)
//  this.state = {
//    username: localStorage.getItem('username')
//  }
  }
	
	login(){
//		console.log(this)
		let usersemail= this.refs.usersemail.value
		let userspwd = this.refs.userspwd.value
		let data = {
			username:usersemail,
			password:userspwd
		}
//		console.log(data)
		utilAxios.lgypost({
        url: '/api/users/signin',
        method: 'get',
//      data: `username=${this.username}&password=${this.password}`,
		data:data,
        callback: function (res) {
        	console.log(res)
//        if (res.data.username) {
//          localStorage.setItem('username', res.data.username)
//          that.storeName = res.data.username
//        }
        }
      })

	}
	
  render() {
    return (
      <div className="signin">
      	<input type="email" ref="usersemail" placeholder="请输入登录邮箱"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="userspwd" placeholder="请输入登录密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="signin_login" onClick={this. login.bind(this)} value="登录" />
      	<b></b>
      	<Link to="/users/forgotpwd">忘记密码</Link>
      </div>
    )
  }
  componentDidMount() {

  }

}


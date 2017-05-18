import React, {Component} from 'react'


export default class Signin extends Component {
  render() {
    return (
      <div className="signin">
      	<input type="email" ref="usersemail" placeholder="请输入登录邮箱"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="userspwd" placeholder="请输入登录密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="signin_login" value="登录" />
      	<b></b>
      	<a>忘记密码</a>
      </div>
    )
  }
  componentDidMount() {

  }

}


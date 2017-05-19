import React, {Component} from 'react'


export default class Forgotpwd extends Component {
  render() {
    return (
      <div className="forgotpwd">
      	<p>找回密码</p>
      	<input type="email" ref="forgotemail" placeholder="请输入邮箱地址"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="forgotpwd_btn" value="确认" />
      </div>
    )
  }
  componentDidMount() {

  }

}


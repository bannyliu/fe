import React, {Component} from 'react'


export default class Resetpwd extends Component {
  render() {
    return (
      <div className="resetpwd">
      	<p>重置密码</p>
      	<input type="password" ref="newpwd" placeholder="请输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="confirmpwd" placeholder="请确认新密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="resetpwd_btn" value="确认" />
      </div>
    )
  }


}


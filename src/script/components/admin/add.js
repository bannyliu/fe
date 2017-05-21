import React,{Component} from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import adminCommon from '../../utils/adminList'

class Add extends Component{

  //添加操作
  add(){
    let title = this.refs.title.value
    let txt = this.refs.txt.refs.input.value
    let uri = this.props.uri
    adminCommon.add(uri)
  }
  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="title">
            <input type="text" placeholder="添加标题" ref="title"/>
          </div>
          <div className="txt">
            <Input type="textarea" rows={4}  ref="txt"/>
          </div>
          <Button onClick={this.add.bind(this)}>提交</Button>
        </div>
    )
  }
}

export default Add

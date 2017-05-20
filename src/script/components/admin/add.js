import React,{Component} from 'react'
import { Input } from 'antd'
import { Button } from 'antd'

class Add extends Component{
  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="title">
            <input type="text" placeholder="添加标题"/>
          </div>
          <div className="txt">
            <Input type="textarea" rows={4} />
          </div>
          <Button onClick={this.props.addHandle}>提交</Button>
        </div>
    )
  }
}

export default Add

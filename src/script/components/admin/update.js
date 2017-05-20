import React,{Component} from 'react'
import Add from './add'
import { Input } from 'antd'
import { Button } from 'antd'


class Update extends Component{
  constructor(props){
    super(props)
  }




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

  componentDidMount(){
    console.log(this.props)
  }


}

export default Update

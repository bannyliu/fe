import React,{Component} from 'react'
import { Input } from 'antd'
import { Button } from 'antd'

class AdminRecruitAdd extends Component{
  render(){
    return (
      <div className="m-recruitAdd">
        <div className="container">
          <div className="tit">招聘管理/内容添加</div>
          <div className="title">
            <input type="text" placeholder="添加标题"/>
          </div>
          <div className="txt">
            <Input type="textarea" rows={4} />
          </div>
          <Button>提交</Button>
        </div>
      </div>
    )
  }
}

export default AdminRecruitAdd

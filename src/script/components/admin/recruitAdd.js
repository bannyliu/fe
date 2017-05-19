import React,{Component} from 'react'
import Add from './add'


class AdminRecruitAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"招聘管理/内容添加"
    }
  }
  render(){
    return (
      <div className="m-recruitAdd">
        <Add title={this.state.title}></Add>
      </div>
    )
  }
}

export default AdminRecruitAdd

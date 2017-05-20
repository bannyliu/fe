import React,{Component} from 'react'
import Add from './add'

class InterviewqAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"面试题管理/内容添加"
    }
  }


  //面试题内容添加操作
  add(){
    console.log(this)
  }


  render(){
    return (
      <div className="m-interviewqAdd">
        <Add title={this.state.title} addHandle={this.add.bind(this)}></Add>
      </div>
    )
  }
}

export default InterviewqAdd

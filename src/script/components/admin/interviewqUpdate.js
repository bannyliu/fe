import React,{Component} from 'react'
import Add from './add'
import Update from './update'

class InterViewqUpdate extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"面试题管理/内容修改"
    }
  }


  //面试题内容添加操作
  add(){
    console.log(this)
  }


  render(){
    return (
      <div className="m-update">
        <Update title={this.state.title}></Update>
      </div>
    )
  }
}

export default InterViewqUpdate

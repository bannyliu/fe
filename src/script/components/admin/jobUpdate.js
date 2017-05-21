import React,{Component} from 'react'
import Add from './add'
import Update from './update'

class JobUpdate extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"招聘管理/内容修改"
    }
  }



  render(){
    return (
      <div className="m-update">
        <Update title={this.state.title} id={this.props.params.id} uriRemove={"/api/job/add"} uriList={"/api/job/detail"}></Update>
      </div>
    )
  }

}

export default JobUpdate

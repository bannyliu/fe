import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../utils/axios.util'
import adminList from '../../utils/adminList'
import { message } from 'antd'
import Management from './management'



class Stage extends Component{
  constructor(props){
    super(props)

    this.state={
      info:{
        title:"视频管理/阶段管理",
        tip:"阶段添加",
        listUri:"/api/video/stage/list",
        addUri:"/api/video/stage/add",
        removeUri:"/api/video/stage/remove"
      }
    }
  }



  render(){
    return (
      <div className="m-videoClassify">
        <Management info={this.state.info}></Management>
      </div>
    )
  }


}

export default Stage

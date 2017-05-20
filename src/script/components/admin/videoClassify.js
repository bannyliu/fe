import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../utils/axios.util'
import adminList from '../../utils/adminList'
import { message } from 'antd'
import Management from './management'



class VideoClassify extends Component{
  constructor(props){
    super(props)
    this.state={
      info:{
        title:"视频管理/分类管理",
        tip:"分类添加",
        listUri:"/api/video/classify/list",
        addUri:"/api/video/classify/add",
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

export default VideoClassify

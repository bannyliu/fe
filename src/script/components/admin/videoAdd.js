import React,{Component} from 'react'
import { Input } from 'antd'
import axios from '../../utils/axios.util'

class VideoAdd extends Component{

  //视频添加提交操作
  submit(){
    let title = this.refs.title.value
    let classify = this.refs.classify.value
    let desc = this.refs.desc.refs.input.value
    let url = this.refs.url.value
    let callback = (res)=>{
      console.log(res)
    }
    let params = {
      url:'/api/video/add',
      method:'post',
      data:`title=${title}&url=${url}&summary=${classify}&category=`,
      callbacl:callback
    }
    // axios.lgypost(params)
  }

  render(){
    return (
      <div className="m-adVideoAdd">
        <div className="container">
          <div className="tit">视频管理/内容添加</div>
          <form className="addCon">
            <div className="addTitle">
              <input type="text" placeholder="添加标题" ref="title"/>
            </div>
            <div className="classify">
              <input type="text" placeholder="添加分类" ref="classify"/>
            </div>
            <div className="desc">
              <Input type="textarea"  ref="desc"/>
            </div>
            <div className="url">
              <input type="text" placeholder="添加视频url" ref="url"/>
            </div>
            <button className="subBtn"  onClick={this.submit.bind(this)}>提交</button>
          </form>
        </div>
      </div>
    )
  }
}




export default VideoAdd

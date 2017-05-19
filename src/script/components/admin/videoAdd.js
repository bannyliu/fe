import React,{Component} from 'react'
import { Input } from 'antd'


class VideoAdd extends Component{


  submit(){
    let title = this.refs.title
    let classify = this.refs.classify
    let desc = this.refs.desc.refs.input
    let url = this.refs.url
    console.log(title.value)
    console.log(classify.value)
    console.log(desc.value)
    console.log(url.value)
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

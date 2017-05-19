import React,{Component} from 'react'

class VideoClassify extends Component{
  render(){
    return (
      <div className="m-videoClassify">
        <div className="container">
          <div className="tit">视频管理/分类管理</div>
          <form className="addCon">
            <div className="addTitle">
              <input type="text" placeholder="添加标题"/>
            </div>
            <div className="classify">

            </div>
          </form>
        </div>
      </div>
    )
  }
}




export default VideoClassify

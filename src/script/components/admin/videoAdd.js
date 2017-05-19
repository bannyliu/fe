import React,{Component} from 'react'

class VideoAdd extends Component{
  render(){
    return (
      <div className="m-adVideoAdd">
        <div className="container">
          <div className="tit">视频管理/内容添加</div>
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




export default VideoAdd

import React,{Component} from 'react'
import { Input } from 'antd'
import axios from '../../utils/axios.util'

class VideoUpdate extends Component{

  //视频修改提交操作
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

  componentDidMount(){
    let id = this.props.params.id
    let data
    //请求视频管理列表数据
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          subjects.map((value,index)=>{
            if(value.id == id){
              data =  value
            }
          })
          this.refs.title.value = data.title
          this.refs.classify.value = data.category.tag
          this.refs.desc.refs.input.value = data.summary
          this.refs.url.value = data.img
        }
    let uri='/api/video/list'
    let params={}
    axios.get(uri,params,callback)
  }

}


export default VideoUpdate

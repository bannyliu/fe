import React,{Component} from 'react'
import { Input } from 'antd'
import { Button , message } from 'antd'
import axios from '../../utils/axios.util'

class Add extends Component{

  //添加操作
  add(){
    let title = this.refs.title.value
    let txt = this.refs.txt.refs.input.value
    let uri = this.props.uri
    let callback = (res)=>{
      console.log(res)
      let data = res.data.data
      if(data.status == "ok"){
        message.success('提交成功')
        this.refs.title.value = ''
        this.refs.txt.refs.input.value = ''
      }else{
        message.error('提交失败，请重试')
      }
    }
    let tag = this.props.tag//区分招聘和面试题(发送数据不同)
    let params = {}
    if(tag == "job"){
      params = {
        url:uri,
        method:"post",
        data:{
          uid: 4,
          title: title,
          city: "Beijing",
          content: txt,
        },
        callback:callback
      }
    }else if(tag == "interview"){
      params = {
        url:uri,
        method:"post",
        data:{
          uid: 4,
          title: title,
          tag: "HTML5",
          content: txt
        },
        callback:callback
      }
    }
    if(!title || !txt){
      message.warning('请填写完整')
    }else{
      axios.lgypost(params)
    }

  }

  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="title">
            <input type="text" placeholder="添加标题" ref="title"/>
          </div>
          <div className="txt">
            <Input type="textarea" rows={4}  ref="txt"/>
          </div>
          <Button onClick={this.add.bind(this)}>提交</Button>
        </div>
    )
  }
}

export default Add

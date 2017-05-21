import React,{Component} from 'react'
import Add from './add'
import { Input } from 'antd'
import { Button } from 'antd'
import adminCommon from '../../utils/adminCommon'
import axios from '../../utils/axios.util'


class Update extends Component{
  constructor(props){
    super(props)
  }

  update(){

  }


  render(){
    return (
      <div className="container">
        <div className="tit">{this.props.title}</div>
        <div className="title">
          <input type="text" placeholder="添加标题" ref="title"/>
        </div>
        <div className="txt">
          <Input type="textarea" rows={4} ref="txt"/>
        </div>
        <Button onClick={this.update}>提交</Button>
      </div>
    )
  }

  componentDidMount(){
    let title = this.refs.title
    let txt = this.refs.txt.refs.input
    let id = this.props.id
    let uri = this.props.uriList
    let params = {}
    let callback = (res)=>{
      console.log(res)
      // let data = res.data.data.subjects
      // let arr={}

      // data.map((value,index)=>{
      //   if(id == value.id){
      //     arr = value
      //   }
      // })
      // title.value = arr.title

    }
    // axios.get(uri,params,callback)
  }


}

export default Update

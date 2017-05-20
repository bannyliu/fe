


import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import Content from '../qanda/qandaDetailContent';


class Comment extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }


  render(){
    let CommentNodes = null
    // console.log(this.props)
    if(this.props.detailDatas){
      console.log(this.props.detailDatas)
       CommentNodes= this.props.detailDatas.map((comment, index) => {
        return (
          <Content answer={comment}></Content>
        )
      })
    }

    return (
      <div className="section">
        <p>回帖</p>
        <div className="reply">
          <Input type="textarea" rows={4} placeholder="大胆的回复吧" ref="inputContent"/>
          <Button type="primary" onClick={this.reply.bind(this)}>回复</Button>
        </div>
        <p>全部回帖({this.props.detailDatas?this.props.detailDatas.length:null})</p>
        <div className="cat" />
        <div className="list">
          {CommentNodes?CommentNodes:null}
        </div>
      </div>
    )
  }

  reply(){
    // console.log(this.refs.inputContent.refs.input.value);
    // Axios.post('/api/qanda/reply', {
    //   uid: 34, // 用户ID [数值：必填]
    //   qid: 10, // 问题id：[数值：必填]
    //   content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
    // }, (res)=>{
    //   console.log(res.data.data);
    // })
  }

  componentDidMount(){
    // console.log(this.props)
  }
}

export default Comment

import React,{Component} from 'react'
import { Table, Icon , Pagination} from 'antd'
import axios from '../../utils/axios.util'



class VideoClassify extends Component{
  constructor(props){
    super(props)
    this.state={
      columns:[
        {
        title: '分类信息',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        },
        {
        title: '删除',
        key: 'action',
        render: (text, record) => (
          <span>
            <a  className="delete" onClick={this.delete.bind(this)}>X</a>
          </span>
        ),
        }
      ],
      data:[
        {
         key: '1',
         name: 'VUE实战1',
        },
        {
         key: '2',
         name: 'VUE实战2',
        },
        {
         key: '3',
         name: 'VUE实战3',
       },
       {
        key: '4',
        name: 'VUE实战4',
       },
        {
         key: '5',
         name: 'VUE实战5',
       },
       {
        key: '6',
        name: 'VUE实战6',
        },
        {
         key: '7',
         name: 'VUE实战7',
        },
        {
         key: '8',
         name: 'VUE实战8',
        }
      ]
    }
  }

  //删除分类操作
  delete(){
    console.log(this)
  }

  //分类添加操作
  submit(){
    let classify = this.refs.classify
  }


  render(){
    return (
      <div className="m-videoClassify">
        <div className="container">
          <div className="tit">视频管理/分类管理</div>
          <div className="tip">分类列表</div>
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />
          <div className="addTip">分类添加</div>
          <div className="txt"><input type="text"ref="classify" /></div>
          <button className="subBtn" onClick={this.submit.bind(this)}>提交</button>
        </div>
      </div>
    )
  }

  componentDidMount(){
    //请求视频管理列表数据
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          let data = []
          subjects.map((value,index)=>{
            console.log(value)
            data.push({
              id:value.id,
              name:value.title,
              date:value.createDate
            })
            this.setState({
              data:data
            })
          })
        }
    let uri='/api/video/list'
    let params={}
    axios.get(uri,params,callback)
  }

}

export default VideoClassify

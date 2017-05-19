import React,{Component} from 'react'
import { Table, Icon , Pagination} from 'antd'
import { Button } from 'antd'
const columns = [
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
      <a  className="delete">X</a>
    </span>
  ),
  }
]

const data = [
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



class VideoList extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className="m-adVideo">
        <div className="container">
          <div className="tit">视频管理/内容列表</div>
          <div className="tip">分类列表</div>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div className="addTip">分类添加</div>
          <div className="txt"><input type="text" /></div>
          <Button type="primary">提交</Button>
        </div>
      </div>
    )
  }
}

export default VideoList

import React,{Component} from 'react'
import AdminHeader from '../common/adminHeader'
import { Table, Icon , Pagination} from 'antd'

const columns = [
  {
  title: '标题',
  dataIndex: 'name',
  key: 'name',
  width:304,
  render: text => <a>{text}</a>,
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    width:304,
  },
  {
  title: '操作',
  key: 'action',
  width:304,
  render: (text, record) => (
    <span>
      <a  className="update">修改</a>
      <a  className="delete">删除</a>
    </span>
  ),
  }
]

const data = [
  {
   key: '1',
   name: 'VUE实战1',
   date: "4.20",
  },
  {
   key: '2',
   name: 'VUE实战2',
   date: "4.20",
  },
  {
   key: '3',
   name: 'VUE实战3',
   date: "4.20",
 },
 {
  key: '4',
  name: 'VUE实战4',
  date: "4.20",
 },
  {
   key: '5',
   name: 'VUE实战5',
   date: "4.20",
 },
 {
  key: '6',
  name: 'VUE实战6',
  date: "4.20",
  },
  {
   key: '7',
   name: 'VUE实战7',
   date: "4.20",
  },
  {
   key: '8',
   name: 'VUE实战8',
   date: "4.20",
  }
]



class AdminInterviewq extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      }
    }
  }

  delete(){
    console.log(1)
  }


  render(){
    return (
      <div className="m-adInterviewq">
        <div className="container">
          <div className="tit">面试题管理/内容列表</div>
          <div className="list"></div>
          <Table columns={columns} dataSource={data} pagination={this.state.pagination}/>
        </div>
      </div>
    )
  }
}

export default AdminInterviewq

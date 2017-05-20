import React,{Component} from 'react'
import List from './list'
import axios from '../../utils/axios.util'


class InterviewqList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"面试题管理/内容列表",
      columns:[
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
            <a  className="update" onClick={this.update.bind(this)}>修改</a>
            <a  className="delete" onClick={this.delete.bind(this)}>删除</a>
          </span>
        ),
        }
      ],
      data:[
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
    }
  }

  //面试题管理修改操作
  update(){
    this.props.router.push('/admin/interviewq/add')
  }



  //面试题管理删除操作
  delete(){
    console.log("面试题管理删除操作")
  }

  render(){
    return (
      <div className="m-interviewqList adList">
        <List columns={this.state.columns} data={this.state.data} title={this.state.title}></List>
      </div>
    )
  }

  componentDidMount(){
    //请求面试题管理列表数据
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          let data = []
          subjects.map((value,index)=>{
            console.log(value)
            data.push({
              name:value.title,
              date:value.createDate
            })
            this.setState({
              data:data
            })
          })
        }
    let uri='/api/interviewq/list'
    let params={}
    axios.get(uri,params,callback)
  }

}

export default InterviewqList

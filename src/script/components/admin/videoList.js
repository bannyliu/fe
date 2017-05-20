import React,{Component} from 'react'
import List from './list'
import axios from '../../utils/axios.util'

class VideoList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"视频管理/内容列表",
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
            <a  className="update" onClick={this.update.bind(this,record.id)}>修改</a>
            <a  className="delete" onClick={this.delete.bind(this,record.id)}>删除</a>
          </span>
        ),
        }
      ],
      data:[]
    }
  }

  //视频管理修改操作
  update(id){
    this.props.router.push(`/admin/video/update/${id}`)
  }



  //视频管理删除操作
  delete(id){

    
    let callback = (res)=>{
          if(res.data.data.status == "ok"){
            //删除成功
          }else{
            //删除失败
          }
        }


    let params = {
      url:'/api/video/remove',
      method:'post',
      data:`id=${id}`,
      callbacl:callback
    }
    // axios.lgypost(params)
  }


  render(){
    return (
      <div className="m-videoList adList">
        <List columns={this.state.columns} data={this.state.data} title={this.state.title}></List>
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

export default VideoList

import React,{Component} from 'react'
import { Table, Icon } from 'antd'

class SearchQanda extends Component{
  constructor(props){
    super(props)
    this.state={
      columns:[{}],
      data:[{
        key: '1',
        name: '徽大家快点哈就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客。',
        title:'如何做好的一个图标？',
        age: 32,
        address: 'New York No. 1 Lake Park'


      }, {
        key: '2',
        name: 'Jim Green',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '3',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '4',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '5',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '6',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '7',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '8',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '9',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '10',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '11',
        name: 'Joe Black',
        title:'name',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }]
    }
  }
  render(){
    return(
      <div className="search_list" >
        <Table columns={this.state.columns} dataSource={this.state.data} />
      </div>
    )
  }
  componentDidMount(){
    let title = this.props.title
    if(title=='视频')
    {
      this.setState({
        columns:[{
          title:title,
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (

            <li>
              <h1>HTML5</h1>
              <a href="">
                <img src="./images/img.png" alt=""/>
                <i></i>
              </a>
              <h2>场景的真实云彩手绘化</h2>
              <h3>2017.04.02</h3>
              <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
            </li>
          )
        } ,
        {
          title:'',
          dataIndex: 'age',
          key: 'age',
          render: (text, record) => (

            <li>
              <h1>HTML5</h1>
              <a href="">
                <img src="./images/img.png" alt=""/>
                <i></i>
              </a>
              <h2>场景的真实云彩手绘化</h2>
              <h3>2017.04.02</h3>
              <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
            </li>
          )
        },
        {
          title:'',
          dataIndex: 'address',
          key: 'address',
          render: (text, record) => (

            <li>
              <h1>HTML5</h1>
              <a href="">
                <img src="./images/img.png" alt=""/>
                <i></i>
              </a>
              <h2>场景的真实云彩手绘化</h2>
              <h3>2017.04.02</h3>
              <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
            </li>
          )
        }]
      })
    }
    else {
      this.setState({
        columns:[{
          title:'',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (
            <span className="search_inner">
            <div className="search_title">{record.title}</div>
            <a href="#" className="search_article">{record.name}</a>
            </span>
          )
        }
       ]
      })
    }
  }
}
export default SearchQanda

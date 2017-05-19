import React,{Component} from 'react'
import { Table, Icon } from 'antd'
const columns = [{
  title: '问答',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => (
    <span className="search_inner">
      <div className="search_title">{record.title}</div>
      <a href="#" className="search_article">{record.name}</a>
    </span>
  ),
} ];

const data = [{
  key: '1',
  name: '徽大家快点哈就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客。',
  title:'如何做好的一个图标？'

}, {
  key: '2',
  name: 'Jim Green',
  title:'name'

}, {
  key: '3',
  name: 'Joe Black',
  title:'name'

}, {
  key: '4',
  name: 'Joe Black',
  title:'name'

}, {
  key: '5',
  name: 'Joe Black',
  title:'name'

}, {
  key: '6',
  name: 'Joe Black',
  title:'name'

}, {
  key: '7',
  name: 'Joe Black',
  title:'name'

}, {
  key: '8',
  name: 'Joe Black',
  title:'name'

}, {
  key: '9',
  name: 'Joe Black',
  title:'name'

}, {
  key: '10',
  name: 'Joe Black',
  title:'name'

}, {
  key: '11',
  name: 'Joe Black',
  title:'name'

}];
class SearchQanda extends Component{
  constructor(props){
    super(props)
    this.state={
      columns:[{}],
      data:[{
        key: '1',
        name: '徽大家快点哈就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客户端爱的空间啊大王，就好打和大家客。',
        title:'如何做好的一个图标？'

      }, {
        key: '2',
        name: 'Jim Green',
        title:'name'

      }, {
        key: '3',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '4',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '5',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '6',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '7',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '8',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '9',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '10',
        name: 'Joe Black',
        title:'name'

      }, {
        key: '11',
        name: 'Joe Black',
        title:'name'

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
    this.setState({
      columns:[{
        title:title,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <span className="search_inner">
            <div className="search_title">{record.title}</div>
            <a href="#" className="search_article">{record.name}</a>
          </span>
        ),
      } ]
    })
  }
}
export default SearchQanda

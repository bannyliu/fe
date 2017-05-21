import React,{Component} from 'react'
import SearchContent from './searchContent'
import SearchContent1 from './searchContent1'
import { Tabs,Input,Icon,Button,Radio} from 'antd'
const Search = Input.Search
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class SearchList extends Component{
  constructor(props){
    super(props)
    this.state={
      searchBody:this.props.params.id
    }
  }
  getSearchBody(){
    console.log(this.refs.input.input.refs.input.value)
  }
  render(){
    return(
      <div className="m-search">
        <div className="search_input">
          <Search
          ref='input'
          defaultValue={this.props.params.id}
          onSearch={value => console.log(value)}
          prefix={<Icon type="search" style={{ fontSize: 27 }} />}
          suffix=''
          />
          <Button type="primary"
            onClick={this.getSearchBody.bind(this)}
          >搜索</Button>
        </div>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="全站" key="1"><SearchContent data={this.state.searchBody} tab="all"/></TabPane>
          <TabPane tab="视频" key="2"><SearchContent data={this.state.searchBody} title="视频" tab="video"/></TabPane>
          <TabPane tab="问答" key="3"><SearchContent data={this.state.searchBody} title="问答" tab="qanda"/></TabPane>
          <TabPane tab="招聘" key="4"><SearchContent data={this.state.searchBody} title="招聘" tab="job"/></TabPane>
        </Tabs>
      </div>
    )
  }
  componentDidMount(){
    // console.log(this.state.searchBody)
    // console.log(this)

  }
}
export default SearchList

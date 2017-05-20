import React, {Component} from 'react'

import { Tabs, Pagination } from 'antd';

import Axios from '../../utils/axios.util'

const TabPane = Tabs.TabPane;

import ListContent from './ListContent'

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      curTag:"PHP",
      step:"第一阶段",
      curPage:1,
      listData:[]
    }
  }

  getList(param,cb){
    Axios.get('/api/video/list', {
      condition: param.condition,
      start: param.start,
      count: param.count
    }, (res)=>{
      cb(res)
    })
  }
  //通过点击title,tag来改变其样式
    changeTag(tag,index){
      this.setState({
        curTag:tag
      })

      this.getList({
        condition:tag,
        start:0,
        count:10
      },(res)=>{
        console.log(res)
      })

    }
    changeTag2(step,index){
      this.setState({
        step:step
      })
    }
  //通过传入数据来渲染title,tag
    titleData(tagData,curTag,changeTag){
      let tagList = tagData.map((item,index)=>{
        return (
          <li><i id={index} className={curTag==item.tag?"active":""} onClick={changeTag.bind(this,item.tag,index)}>{item.tag}</i></li>
        )
      })
      return tagList
    }
  render() {
    console.log(this.state.curTag+":"+this.state.step)
    let tagData = [{id:1,tag:"PHP"},{id:2,tag:"HTML5"},{id:3,tag:"VUE"},{id:4,tag:"JS"}]
    let tagData2 = [{id:1,tag:"第一阶段"},{id:2,tag:"第二阶段"},{id:3,tag:"第三阶段"}]
    return (
      <div className="m-video-list">
        <div className="nav">
          <div className="cat">
            <h1 className="title">分类</h1>
            <ul className="content">
              {this.titleData(tagData,this.state.curTag,this.changeTag)}
            </ul>
          </div>
          <ul className="level">
            <li className="title">阶段</li>
            {this.titleData(tagData2,this.state.step,this.changeTag2)}
          </ul>
        </div>
        <div className="list">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="最新" key="1">
              <ListContent step={this.state.step} tag={this.state.curTag}></ListContent>
            </TabPane>
            <TabPane tab="最热" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
        <Pagination total={this.state.listData.total}/>
      </div>
    )
  }

  callback(key){
    console.log(key);
  }

  componentDidMount() {
    this.getList({
      condition:this.props.tag,
      start:0,
      count:10
    },(res)=>{
      this.setState({
        listData:res.data.data
      })
    })
  }
}

export default List

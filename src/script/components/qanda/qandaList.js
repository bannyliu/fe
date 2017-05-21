import React from 'react';
import { Link } from 'react-router';

import { Table, Icon } from 'antd';
import { Pagination } from 'antd';
import Axios from '../../utils/axios.util';

// import ListContent from './ListContent'

// const data = [{
//   key: '1',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: '45/34',
// }, {
//   key: '2',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: '45/34',
// }, {
//   key: '3',
//   title: 'Mongoose设置默认时间',
//   author: '王大海',
//   createDate: '20:50',
//   action: 'hits/answers',
// }];

class qandaList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      curTag:"所有标签",
      count:10,
      pagination:{
        pageSize:6
      },
      columns : [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        // render: (text, record) => <a href="">{text},{record.id}</a>,
        render: (text, record) => <Link to={`qanda/detail/${record.id}`}>{record.id}-{text}</Link>,
      }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      }, {
        title: '发布时间',
        dataIndex: 'createDate',
        key: 'createDate',
      },
      {
        title: '点击/回帖',
        dataIndex: 'action',
        key: 'action',
      }
    ],
    };

    // 获取数据
    this.getData({
      start: 0,
      count: 10
    });

  };

  getData(mes) {
    Axios.get('/api/qanda/list',mes, (res)=>{
      // console.log(res.data.data);
      var listData = res.data.data.subjects.map((comment, index) => {
        return {
          id: comment.id,
          key: index,
          title: comment.title,
          author: comment.author,
          tag:comment.tag,
          createDate: comment.createDate,
          action: comment.hits + '/' + comment.answers,
        }
      });
      this.setState({
        data: listData,
        filterData:listData,
        total:res.data.data.total
      });
      
    })
  };

//通过点击标签来改变table中的数据源
  changeTag(tag,id){
    // console.log(this.state.data[0].tag)
    this.setState({
      curTag:tag
    })
    this.state.curTag = tag
    this.dataProcessing()
  }

  dataProcessing(){
    let filterData = []
    this.state.data.map((item,index)=>{
      if(this.state.curTag=="所有分类"){
        filterData.push(item)
      }
      else if(item.tag == this.state.curTag){
        filterData.push(item)
      }
      return
    })
    this.setState({
      filterData:filterData
    })
    console.log(filterData)
  }

  pageChange(page){
    this.getData({
      start:page*this.state.count,
      count:this.state.count
    })
  }



  render() {
    let tagData = [{id:0,tag:"所有标签"},{id:1,tag:"PHP"},{id:2,tag:"HTML5"},{id:3,tag:"VUE"},{id:4,tag:"JS"}]
    let tagList = tagData.map((item,index)=>{
      return (
        <li><i id={index} className={this.state.curTag==item.tag?"active":""} onClick={this.changeTag.bind(this,item.tag,index)}>{item.tag}</i></li>
      )

    })
    return (
      <div className="m-qanda-list">
        <div className="go-q">
          <Link to="/qanda/add"><img src="/images/goq.png" /></Link>
        </div>
        <div className="nav">
          <div className="cat">
            <h1 className="title">标签</h1>
            <ul className="content">
              {tagList}
            </ul>
          </div>
        </div>
        <div className="list">
          <Table columns={this.state.columns} dataSource={this.state.filterData} pagination={false}/>
          <Pagination defaultCurrent={1} total={this.state.total?this.state.total:1}  onChange={this.pageChange.bind(this)} />
        </div>
      </div>
    )
  }

  callback(key){
    // console.log(key);
  }


}

export default qandaList

import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import IndexCommonTitle from './indexCommon'
import AxiosUtils from '../../utils/axios.js'

class IndexNewsList extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[{}]
    }
  }
  push(id,tab){
    // hashHistory.push(`/${this.props.tabs}/detail/${id}`)
    hashHistory.push(`/${tab}/detail/${id}`)
  }
  indexNewsList(list){
    return list.map((value,index)=>{
      if(index < 8)
      {
        return(
          <div className="news_content_list" onClick={this.push.bind(this,value.id,this.props.tabs)}>
          <p>{value.title}</p>
          <p className="news_content_time">{value.createDate}</p>
          <br />
          </div>
        )
      }
    })
  }
  render(){
    return(
      <li className="news_list">
        <IndexCommonTitle title={this.props.title} path={this.props.tabs}/>
        <div className="news_content">
          {this.indexNewsList(this.state.data)}
        </div>
      </li>
    )
  }
  componentDidMount(){
    let tabs = this.props.tabs
    let that = this
    let uri
    if(tabs=='job'){
      uri = `/mock/api/job/list?start=0&count=10`
    }
    else{
      uri = `/api/${tabs}/list?start=0&count=10`
    }
    AxiosUtils.get({
      url: uri,
      method:'get',
      data:{
        start:0,
        count:10
      },
      callback:function(res){
        // console.log(res)
        that.setState({
          data:res.data.data.subjects
        })
      }
    })
  }
}
export default IndexNewsList

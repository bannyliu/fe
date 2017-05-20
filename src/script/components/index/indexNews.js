import React,{Component} from 'react'
import IndexNewsList from './indexNewsList'

class IndexNews extends Component{
  render(){
    return(
      <ul className="index_news">
        <IndexNewsList title="推荐视频" tabs="video"/>
        <IndexNewsList title="最新面试题" tabs="interview"/>
      </ul>
    )
  }
}
export default IndexNews

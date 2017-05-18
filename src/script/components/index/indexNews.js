import React,{Component} from 'react'
import IndexNewsList from './indexNewsList'

class IndexNews extends Component{
  render(){
    return(
      <ul className="index_news">
        <IndexNewsList />
        <IndexNewsList />
      </ul>
    )
  }
}
export default IndexNews

import React,{Component} from 'react'
import IndexCommonTitle from './indexCommon'
import IndexNewsContent from './indexNewsContent'

class IndexNewsList extends Component{
  render(){
    return(
      <li className="news_list">
        <IndexCommonTitle />
        <IndexNewsContent />
      </li>
    )
  }
}
export default IndexNewsList

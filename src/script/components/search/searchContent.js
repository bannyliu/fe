import React,{Component} from 'react'
import SearchList from './searchList'

class SearchContent extends Component{
  render(){
    return(
      <div className="search_content">
        <p className="search_total">共找到<span>2</span>个相关内容</p>
        <SearchList ref="video" title="视频"/>
        <SearchList ref="qanda" title="问答"/>
        <SearchList ref="job" title="招聘"/>
      </div>
    )
  }
  componentDidMount(){
    // console.log(this.props )
    // console.log(this.refs)
  }
}
export default SearchContent

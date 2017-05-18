import React,{Component} from 'react'
import IndexCommonTitle from './indexCommon'
import IndexVideo from './indexVideo'

class IndexSuggestList extends Component{
  render(){
    return(
      <div className="index_list">
        <IndexCommonTitle />
        <IndexVideo />
        <IndexVideo />
        <IndexVideo />
      </div>
    )
  }
}
export default IndexSuggestList

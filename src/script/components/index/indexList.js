import React,{Component} from 'react'
import IndexBanner from './indexbanner'
import IndexSuggest from './indexSuggest'
import IndexNews from './indexNews'

class IndexList extends Component{
  render(){
    return(
      <div className="m-indexlist">
        <IndexBanner />
        <IndexSuggest />
        <IndexNews />
      </div>
    )
  }
}
export default IndexList

import React,{Component} from 'react'
import IndexCommonTitle from './indexCommon'
import IndexVideo from './indexVideo'
import AxiosUtils from '../../utils/axios.util'
import Axios from 'axios'

class IndexSuggestList extends Component{
  constructor(props){
    super(props)
  }
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
  componentDidMount(){
    Axios({
      url:"/api/videolist",
      method:'get'
    })
    .then(function(res){
      console.log(res)
    })
  }
}
export default IndexSuggestList

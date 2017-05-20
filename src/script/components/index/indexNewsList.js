import React,{Component} from 'react'
import IndexCommonTitle from './indexCommon'
import IndexNewsContent from './indexNewsContent'
import AxiosUtils from '../../utils/axios.js'

class IndexNewsList extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[{}]
    }
  }
  render(){
    return(
      <li className="news_list">
        <IndexCommonTitle title={this.props.title}/>
        <IndexNewsContent />
      </li>
    )
  }
  componentDidMount(){
    AxiosUtils.get({
      url:'api/qanda/list',
      method:'get',
      data:{},
      callback:function(res){
        console.log(res.data.data.subjects)
      }
    })
  }
}
export default IndexNewsList

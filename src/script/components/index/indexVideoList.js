import React,{Component} from 'react'
import IndexCommonTitle from './indexCommon'
import AxiosUtils from '../../utils/axios.util'
import Axios from 'axios'

class IndexVideoList extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[{}]
    }
  }
  indexVideo(list){
    return list.map((value,index)=>{
      return(
        <div className="index_vedio">
          <dl>
            <dt>
              <img className="background" src={value.img}/>
              <img className="video" src="/images/video.png"/>
              <img className="corner" src="/images/corner.png"/>
            </dt>
            <dd className="vedio_title">{value.title}</dd>
            <dd className="vedio_time">{value.createDate}</dd>
            <dd className="vedio_decription">{value.summary}</dd>
          </dl>
        </div>
      )
    })
  }
  render(){
    return(
      <div className="index_list">
        <IndexCommonTitle title="推荐视频"/>
        {this.indexVideo(this.state.data)}
      </div>
    )
  }
  componentDidMount(){
    let that = this
    Axios({
      url:"/api/video/list",
      method:'get',
      data:{
        start:0,
        count:3
      }
    })
    .then(function(res){
      that.setState({
        data:res.data.data.subjects
      })
    })
  }
}
export default IndexVideoList

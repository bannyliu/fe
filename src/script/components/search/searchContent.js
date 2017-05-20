import React,{Component} from 'react'
import SearchList from './searchList'
import axios from '../../utils/axios.util'

class SearchContent extends Component{
  constructor(props){
    super(props)
    this.state={
      isShow:{
        "all":false,
        "video":false,
        "qanda":false,
        "job":false
      },
      total:0,
      videoData:null,
      jobData:null,
      qandaData:null
    }
  }
  render(){

    return(
      <div className="search_content">
        <p className="search_total">共找到<span>{this.state.total}</span>个相关内容</p>
        <div className={this.state.isShow.video?'':'hide'}>
          <SearchList ref="video" title="视频" data={this.state.videoData}/>
        </div>
        <div className={this.state.isShow.qanda?'':'hide'}>
          <SearchList ref="qanda" title="问答" data={this.state.qandaData}/>
        </div>
        <div className={this.state.isShow.job?'':'hide'}>
          <SearchList ref="job" title="招聘"  data={this.state.jobData}/>
        </div>
      </div>
    )
  }
  componentDidMount(){
    // console.log(1)
    let that = this
    let tab = this.props.tab
    let query = this.props.data
    let object ={
      "all":false,
      "video":false,
      "qanda":false,
      "job":false
    }
    let objectall={
      "all":true,
      "video":true,
      "qanda":true,
      "job":true
    }
    //不是all 按照tab改变为true
    object[tab]=true
    //all时 全部是true
    if(tab=='all'){
      object = objectall
    }


    axios.lgypost(
      {
        url:'/api/search',
        method:'get',
        data:{
          query:query,
          start:0,
          count:10
        },
        callback:function(res){
          //total 总共内容数量的变化

          let totalNum = 0
          let videoData = res.data.data.subjects.video
          if(tab=='all'){
            totalNum = res.data.data.total
          }else {
            totalNum = res.data.data.subjects[tab].total
          }
          let video = res.data.data.subjects.video
          // console.log(video)
          that.setState({
            isShow:object,
            total:totalNum,
            videoData:video,
            jobData:res.data.data.subjects.job,
            qandaData:res.data.data.subjects.qanda
          })
        }
      }
    )


  }
}
export default SearchContent

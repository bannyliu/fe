import React,{Component} from 'react'


class IndexVedio extends Component{
  render(){
    return(
      <div className="index_vedio">
        <dl>
          <dt>
            <img className="background" src="/images/suggest.png"/>
            <img className="video" src="/images/video.png"/>
            <img className="corner" src="/images/corner.png"/>
          </dt>
          <dd className="vedio_title">如何做好拟物图标</dd>
          <dd className="vedio_time">2017.04.21</dd>
          <dd className="vedio_decription">超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的借鉴。</dd>
        </dl>
      </div>
    )
  }
}
export default IndexVedio

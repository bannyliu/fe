import React, {Component} from 'react'



class ListContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[]
    }
  }

  render() {
    // console.log(this.props.step)
    // console.log(this.props.tag)
    return (
      <div className="m-list-content">
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default ListContent

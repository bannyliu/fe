import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';
import CommentCommon from '../common/Comment';

class qandaDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: null,
      CommentNodes: [1,2,3]
    };

    // 获取数据
    this.getData();
  };

  getData() {
    Axios.post('/api/qanda/detail', {
      uid: 34,
      id: this.props.params.id
    }, (res)=>{
      // console.log(res.data.data);
      this.setState({
        question: res.data.data,
        answers: res.data.data.answers,
      });

    })
  };

  render() {
    return (
      <div className="m-qanda-detail">
        <div className="photo">
          <img src="./images/uidPic.png" />
        </div>
        <div className="main">
          <div className="article">
            <div className="author">
              <b>{this.state.question.author}</b>
              <i>{this.state.question.createDate}</i>
            </div>

            <div className="title">
              <div>{this.state.question.title}</div>
              <p>
                {this.state.question.content}
              </p>
            </div>

            <div className="content">
              <div>最佳答案</div>
              <p>
                超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的借鉴。超写实的图标，在设计中比较常见案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写实。超写实的图标，在设计中比较常见案例中的写实图标给初学者一个最好的借鉴。超写实的图标在设计中比较常见，案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的借鉴。超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写实。
              </p>
            </div>
          </div>
          <CommentCommon  detailDatas={this.state.answers}></CommentCommon>



        </div>

      </div>
    )
  }



  componentDidMount() {

  }
}

export default qandaDetail;

import react,{Component} from 'react'

class IndexCommonTitle extends Component {
  render(){
    return(
      <div className="index_title">
        <p>{this.props.title}</p>
        <span>更多</span>
      </div>
    )
  }
}
export default IndexCommonTitle

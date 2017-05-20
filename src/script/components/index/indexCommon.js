import react,{Component} from 'react'

class IndexCommonTitle extends Component {
  render(){
    return(
      <div className="index_title">
        <p>{this.props.title}</p>
        <span>More</span>
      </div>
    )
  }
}
export default IndexCommonTitle

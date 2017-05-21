import React, {Component} from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

class Index extends Component {
  linkTo(value,that){
    this.props.router.push(`/search/list/${value}`)
    that.refs.input.input.refs.input.value = ''
  }
  render() {
    return (
      <div className="m-index">
        <Header link={this.linkTo.bind(this)}/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
  componentDidMount() {
  }
  componentDidUpdate() {

  }
}

export default Index

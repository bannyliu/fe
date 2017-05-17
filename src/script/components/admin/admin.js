import React,{Component} from 'react'
import AdminHeader from '../common/adminHeader'

class Admin extends Component{
  render(){
    return (
      <div className="m-admin">
        <AdminHeader/>
        {this.props.children}
      </div>
    )
  }
}

export default Admin

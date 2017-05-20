import axios from './axios.util'


//请求列表数据
export default {
  list:(uri,that)=>{
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          let data = []
          subjects.map((value,index)=>{
            data.push({
              id:value.id,
              name:value.title,
              date:value.createDate
            })
            that.setState({
              data:data
            })
          })
    }
    let params={}
    axios.get(uri,params,callback)
  },
  delete:(id,uri)=>{
    console.log(id)
    console.log(uri)
    let callback = (res)=>{
          if(res.data.data.status == "ok"){
            //删除成功
          }else{
            //删除失败
          }
        }

    let params = {
      url:uri,
      method:'post',
      data:`id=${id}`,
      callback:callback
    }
    // axios.lgypost(params)
  }
}

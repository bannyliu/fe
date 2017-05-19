require('../style/app.less')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import store from './redux/store'
import { Provider } from 'react-redux'

//index.js
import Index from './components/Index'
//index 主页面
import IndexList from './components/index/indexList'
//video 视频
import VideoList from './components/video/List'
//qanda 问答
import QandaList from './components/qanda/qandaList'
import QandaDetail from './components/qanda/qandaDetail'
import QandaAdd from './components/qanda/qandaAdd'
//admin 后台登录
import Admin from './components/admin/admin'
import AdminInterviewq from './components/admin/adminInterviewq'
import AdminRecruit from './components/admin/adminRecruit'
import AdminRecruitAdd from './components/admin/adminRecruitAdd'
import AdminVideo from './components/admin/adminVideo'
import AdminVideoAdd from './components/admin/adminVideoAdd'
//search 搜索
import Search from './components/search/search'

import InterviewqList from './components/admin/interviewqList'
import InterviewqAdd from './components/admin/interviewqAdd'
import RecruitList from './components/admin/recruitList'
import RecruitAdd from './components/admin/recruitAdd'
import Vlist from './components/admin/videoList'
import Vadd from './components/admin/videoAdd'
import Vclassify from './components/admin/videoClassify'



//job 招聘

import JobList from './components/job/jobList'
// import QandaDetail from './components/qanda/qandaDetail'

import Users from './components/users/Users'
import Signin from './components/users/Signin'
import Forgotpwd from './components/users/Forgotpwd'
import Resetpwd from './components/users/Resetpwd'

//console.log(Users)

ReactDOM.render((
  <Provider store={store().store}>
    <Router history={hashHistory}>

      <Route path="/" component={Index}>
        <IndexRedirect to="/index/list" />

        {/* 主页面 index*/}
        <Route path="index">
          <Route path="list" component={IndexList}></Route>
        </Route>


        {/* 视频  video*/}
        <Route path="video">
          <Route path="list" component={VideoList}></Route>
        </Route>

        {/* 问答 qanda */}
        <Route path="qanda">
          <Route path="list" component={QandaList}></Route>
          <Route path="detail/:id" component={QandaDetail}></Route>
          <Route path="add" component={QandaAdd}></Route>
        </Route>

        {/* 招聘 job*/}
        <Route path="job">
          <Route path="list" component={JobList}></Route>
          {/* <Route path="job/:id" component={QandaDetail}></Route> */}
        </Route>

        {/* 搜索 search*/}
        <Route path="search">
          <Route path="list" component={Search}></Route>
        </Route>
      </Route>


      {/* 后台管理 admin*/}
      <Router path="admin" component={Admin}>
        <IndexRedirect to="/admin/video" />
        {/* 视频管理 */}
        <Route path="video">
          <IndexRedirect to="/admin/video/classify" />
          <Route path="classify" component={Vclassify}></Route>
          <Route path="list" component={Vlist}></Route>
          <Route path="add" component={Vadd}></Route>
        </Route>
        {/* 招聘管理 */}
        <Route path="recruit">
          <IndexRedirect to="/admin/recruit/list" />
          <Route path="list" component={RecruitList}></Route>
          <Route path="add" component={RecruitAdd}></Route>
        </Route>
        {/* 面试题管理 */}
        <Route path="interviewq">
          <IndexRedirect to="/admin/interviewq/list" />
          <Route path="list" component={InterviewqList}></Route>
          <Route path="add" component={InterviewqAdd}></Route>
        </Route>
      </Router>

       {/* 登录 users*/}
      <Route path="/users" component={Users}>
        <IndexRedirect to="signin" />
        <Route path="signin" component={Signin}></Route>
        <Route path="forgotpwd" component={Forgotpwd}></Route>
        <Route path="resetpwd" component={Resetpwd}></Route>
      </Route>

    </Router>
  </Provider>
), document.getElementById('root'))

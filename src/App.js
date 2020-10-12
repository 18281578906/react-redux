import React from 'react';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from './redux/actionCreator'
import { connect } from 'react-redux'
import './App.css';
//布局组件
import BaseLayout from './component/layout/BaseLayout'

//组件
import Login from './pages/Login'
import Register from './pages/Register'

function App(props) {
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    console.log(userAgentInfo);
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
useEffect(() => {
    // if (!IsPC()) {
    //     new VConsole()
    // }
    props.getIsPc(IsPC())
    if (localStorage.getItem('loginInfo')) {
        if (Object.keys(JSON.parse(localStorage.getItem('loginInfo')))[0]) {
            props.setInfo(JSON.parse(localStorage.getItem('loginInfo')))
        }
    }else{
        props.setInfo({})
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.IsPC])
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/' component={BaseLayout}></Route>
        <Route path='/404' component={() => <h1>404</h1>}></Route>
        <Redirect to='/404'></Redirect> {/* 找不到的话重新定位到404页面 */}
      </Switch>
    </Router>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


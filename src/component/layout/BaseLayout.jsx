import React from 'react';
import {Route} from 'react-router-dom';
import router from '../../router/router'
import TabBar from '../TabBar'
import './style.css'


const BaseLayout=()=>{
  return (
    <div>
        { // 路由tab栏
            Object.values(router).map(e => {
                return (
                    <Route path={e.url} exact component={e.page} key={e.url} />
                )
            })
        }
        <TabBar/>
    </div>
)
}
export default BaseLayout;
import React from 'react';
//使用redux的页面需要调用这两个
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'

import {Button} from 'antd';
import './style.css'

const Home=(props)=>{
  console.log(props);
  return <div>
<Button type='primary' onClick={props.delete} >-</Button>
  {props.num}
<Button type='primary' onClick={props.add}>+</Button>
  </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

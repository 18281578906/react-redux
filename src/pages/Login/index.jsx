import React,{useEffect} from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import request from '../../api/request'
import './style.css'

const Login=(props)=>{
  console.log(props);
  const login = async (account, password) => {
    return await request({
      method: 'post',
      url: '/merchant/v1/login',
      params: {
        account:'account',
        password:'123456',
      }
    })
  }
  useEffect(() => {
    login()
  }, [])
return <div>
login
</div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

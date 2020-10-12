import Home from '../pages/Home'
import Test from '../pages/Test'
const router=()=>{
  return {
    home:{
      url:'/home',
      desc:'home',
      page:Home
    },
    test:{
      url:'/test',
      desc:'test',
      page:Test
    }
  }

}
export default router();
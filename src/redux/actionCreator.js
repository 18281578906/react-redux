export const mapStateToProps = (state, ownProps) => {
  return {
    num: state.num,
    info: state.info,
    isPC:state.isPC
  }
}
export const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    add:()=>{
      dispatch({type:'ADD'})
    },
    delete:()=>{
      dispatch({type:'DELETE'})
    },
    setInfo:(data)=>{
      dispatch({type:'INFO',data})
    },
    actionTab:(index)=>{
      dispatch({type:'TAB',index})
    },
    getIsPc:(bol)=>{
      dispatch({type:'ISPIC',bol})
    }
  }
}
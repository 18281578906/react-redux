const defaultState = {
  num: 0,
  info: {},
  tab: 0,
  isPC:true
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      state.num++;
      break;
    case 'DELETE':
      state.num--;
      break;
    case 'INFO':
      state.info = action.data;
      break;
    case 'TAB':
      state.tab = action.index;
      break;
      case 'ISPIC':
        state.isPC=action.bol;
        break;
    default:
      return state;
    
  }
  return JSON.parse(JSON.stringify(state))
}
export default reducer;
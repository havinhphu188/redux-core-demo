const initialState = {
    rawData:[0,1,2,3,4,5,6,7,8,9]
  }

/* reducer contain 2 information: 
1.how state shape look like (default state),  
2. how store handle action
*/
const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        return {
            rawData: [...state.rawData,action.addNumber]
        }
      case 'DELETE_NUMBER':
        let rawData = [...state.rawData];
        rawData.splice(action.index,1);
        return {
            rawData: rawData
        }  
      default:
        return state
    }
  }
  
  export default reducers
  
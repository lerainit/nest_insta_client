import {SET_VALUE_INDEX} from './actions'


const initialValue = {
    value: null,
  }
  
  const cardIndexReducer = (state = initialValue, action) => {
    switch (action.type) {
       
  
        case SET_VALUE_INDEX: {
          return { value: action.payload }
        }
  
        default: {
          return state;
        }
    }
  };

  export default cardIndexReducer;

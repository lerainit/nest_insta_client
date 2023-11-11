import { openModal } from "./actions";
import { closeModal } from "./actions";


const initialValue = {
  value: false,

}

const modalReducer = (state = initialValue, action) => {
  switch (action.type) {
    case openModal: {
      return { ...state, value: true }
    }



    case closeModal: {
      return { ...state, value: false }
    }


    default: {
      return state;
    }
  }
};

export default modalReducer;

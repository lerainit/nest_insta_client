import { setCards } from "./actions";

const initialValue = {
    value: JSON.parse(localStorage.getItem('products')),
    isLoading: true
}


const cardsReducer = (state = initialValue, action) => {

    switch (action.type) {

        case setCards: {
            return { value: JSON.parse(localStorage.getItem('products')), isLoading: false }
        }
        default: {
            return state
        }

    }

}

export default cardsReducer
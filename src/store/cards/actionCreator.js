import { setCards } from './actions'
import instance from "../../instance";


export const setCardsAC = () => async (dispatch) => {

    if (!localStorage.getItem('products')) {
        try {
            const {data} = await instance.get( `${process.env.REACT_APP_API_URL}/posts`)



             
                localStorage.setItem(`products`, JSON.stringify(data))

                dispatch({ type: setCards, })



        } catch (err) {

            console.log(err);
        }
    }
    else {
        dispatch({ type: setCards, payload: [] })
    }

} 

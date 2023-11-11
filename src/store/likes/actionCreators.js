import { incrementLikes, decrementLikes, setCounter } from "./actions";
import instance from "../../instance";

export const incrementLikesAC = (payload) => ({ type: incrementLikes, payload })

export const decrementLikesAC = (payload) => ({ type: decrementLikes,payload })
export const setCounterAC = () => async (dispatch) => {


    try {
        const {data} = await instance.get(`${process.env.REACT_APP_API_URL}/posts`)





            dispatch({ type: setCounter, payload: data })



    } catch (err) {

        console.log(err);
    }


} 
import { addComments, setComments, showComments } from './actions'
import instance from "../../instance";


export const addCommentsAC = (payload) => ({ type: addComments, payload })
export const showCommentsAC = (payload) => ({ type: showComments, payload })
export const setCommentsAC = () => async (dispatch) => {


    try {
        const  {data}  = await instance.get( `${process.env.REACT_APP_API_URL}/posts`);



 
            localStorage.setItem(`products`, JSON.stringify(data))

            dispatch({ type: setComments, payload: data })



    } catch (err) {

        console.log(err);
    }
}

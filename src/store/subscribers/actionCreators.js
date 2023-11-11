import { addSubscriber, setSubscribers, addAuthSubscriber, removeSubscriber } from "./actions";
import instance from "../../instance";


export const setSubscribersAC = () => async (dispatch) => {

    try {
        const  {data}  =await instance.get(`${process.env.REACT_APP_API_URL}/users`);



            dispatch({ type: setSubscribers, payload: data })

    } catch (err) {

        console.log(err);
    }
}

export const addSubscriberAC = (payload) => ({ type: addSubscriber, payload })
export const addAuthSubscriberAC = (payload) => ({ type: addAuthSubscriber, payload })
export const removeSubscriberAC = (payload) => ({ type: removeSubscriber, payload })

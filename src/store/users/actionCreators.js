import { setUsers,setUser } from "./actions";
import instance from "../../instance";



export const setUsersAC = () => async (dispatch) => {

    try {
        const {data} = await instance.get(`${process.env.REACT_APP_API_URL}/users`);





            dispatch({ type: setUsers, payload: data })


    } catch (err) {

        console.log(err);
    }
}
export const setUserAC = (nickName) => async (dispatch) => {

    try {
        const {data} = await instance.get(`${process.env.REACT_APP_API_URL}/users/nick/${nickName}`)


        dispatch({ type: setUser, payload: data })


    } catch (err) {

        console.log(err);
    }
}
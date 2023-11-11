import { setToken,setUser } from "./actions";
import axios from "axios";



export const logIn = (authObj) => async (dispatch) => {

    try {
        const {data} = await axios.post(`http://localhost:5002/auth/login`,authObj)


  localStorage.setItem('token',JSON.stringify(data.token))


        dispatch({ type: setToken, payload: data.token })


    } catch (err) {

        console.log(err);
    }
}
export const register = (user) => async (dispatch) => {

    try {
        const data = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,user)


        dispatch({ type: setUser, payload: data })


    } catch (err) {

        console.log(err);
    }
}
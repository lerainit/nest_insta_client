import { setFollowers, becomeFollower, unFollow } from "./actions";
import instance from "../../instance";

export const setFollowersAC = () => async (dispatch) => {


    try {
        const  {data}  = await instance.get(`${process.env.REACT_APP_API_URL}/users`);





            dispatch({ type: setFollowers, payload: data })




    } catch (err) {

        console.log(err);
    }


}
export const becomeFollowerAC = (payload) => ({ type: becomeFollower, payload })
export const unFollowAC = (payload) => ({ type: unFollow, payload })
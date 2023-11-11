import { setPosts } from "./actions";
import instance from "../../instance";

 export const setPostsAC =()=> async (dispatch)=>{
   
        try {
            const {data} = await instance.get(`${process.env.REACT_APP_API_URL}/posts`)



                
               let postsArr = data

                dispatch({ type:setPosts,payload: postsArr})
            

    
        } catch (err) {
         
            console.log(err);
        }}
     
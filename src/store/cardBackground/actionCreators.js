import { renderBackground,hideBackground,setBackground} from "./actions";
import instance from "../../instance";
export const setBackgroundAC =()=> async (dispatch)=> {

  if  (!localStorage.getItem('products')){
        try {
            const {data} = await instance.get(`${process.env.REACT_APP_API_URL}/posts`);
       
    

        
            localStorage.setItem(` products`,JSON.stringify( data))
               
             
                dispatch({ type:setBackground,})
            

    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setBackground})
       }

}

 export const renderBackgroundAC = (payload) => ({type:renderBackground,payload})

 export const hideBackgroundAC =(payload) =>({type:hideBackground,payload})
import { setPosts,postsSlice } from "./actions";

const initialValue = {
    value:[],
    isLoading:true
}


const postsReducer = (state = initialValue,action) =>{

switch (action.type){


case setPosts: {
  
return {value:action.payload,isLoading:false}
}
case postsSlice:{
let count = action.payload.count

 const postsSlice = action.payload.posts?.reverse().slice(0 + count ,3 + count)

    return {value:postsSlice,isLoading:false}
}
default:{
    return state
}


}


}

export default postsReducer
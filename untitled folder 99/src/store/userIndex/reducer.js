import { setUserIndex } from "./actions";

const initialValue = {
    value:0
}

const userIndexReducer = (state = initialValue,action) =>{

switch (action.type){
case setUserIndex:{
return{value:action.payload}

}
default:{
    return state
}


}



}
export default userIndexReducer
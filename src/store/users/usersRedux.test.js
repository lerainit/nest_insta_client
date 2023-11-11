import UsersReducer from "./reducer";
import { setUsers } from "./actions";

const initialState = {
    
    value: [],
    isLoading:true
  

}
const users = ['john','sam']

describe('Users reducer works',()=>{

test('should return the initial state',()=>{
expect(UsersReducer(undefined,{type:undefined})).toEqual(initialState)


})
test('should change value',()=>{
expect(UsersReducer(initialState,{type: setUsers,payload:users})).toEqual({
    
        value: users,
        isLoading:false
      
      

    })
   
     

})
})
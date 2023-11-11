import { setUsers,setUser } from "./actions";
const initialValue = {
    value: [],
    user:[],
    isLoading: true
}

const UsersReducer = (state = initialValue, action) => {
    switch (action.type) {


        case setUsers: {
            return { value: action.payload, isLoading: false }
        }
        case setUser: {
            return {...state, user: action.payload}
        }
        default: {
            return state
        }


    }

}
export default UsersReducer;
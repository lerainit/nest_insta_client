import { setToken,setUser,logOut,setLogin } from "./actions";
import instance from "../../instance";

const initialValue = {
    token: JSON.parse(localStorage.getItem('token')) | null,
    isLoggedIn:JSON.parse(localStorage.getItem('loggedIn')) | false ,
    user:[],

}

const AuthReducer = (state = initialValue, action) => {
    switch (action.type) {


        case setToken: {
            return {...state, token: action.payload }
        }
        case setUser: {
            return {...state, user: action.payload}
        }
        case setLogin: {
            localStorage.setItem('loggedIn',JSON.stringify(true))
            return {...state, isLoggedIn:JSON.parse(localStorage.getItem('loggedIn')) }
        }
        case logOut: {
            localStorage.clear()
            let user = action.payload;
            console.log(user)
          //  user.isAuth = false;

      instance.put(`${process.env.REACT_APP_API_URL}/auth/logout`, user
      )

            return {...state, user: action.payload}
        }
        default: {
            return state
        }


    }

}
export default AuthReducer;
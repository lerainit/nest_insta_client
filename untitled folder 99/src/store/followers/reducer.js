import { setFollowers, becomeFollower, unFollow } from "./actions";
import instance from "../../instance";
const initialValue = {

  value: [],
  isLoading: true

}

const FollowerReducer = (state = initialValue, action) => {

  switch (action.type) {

    case setFollowers: {
      return ({...state, value: action.payload, isLoading: false })

    }
    case becomeFollower: {
      let usersArr = state.value
      let user =  usersArr[action.payload.userIndex]

    usersArr[action.payload.userIndex].isFollower = true
      console.log(user)

      instance.put(`${process.env.REACT_APP_API_URL}/users`, user)

      return {...state, value: usersArr, isLoading: false }
    }
    case unFollow: {
      let usersArr = state.value
      let user = usersArr[action.payload.userIndex]

       user.isFollower = false

      instance.put(`${process.env.REACT_APP_API_URL}/users`, user
      )
      return {...state, value: usersArr, isLoading: false }
    }
    default: {
      return state
    }
  }

}
export default FollowerReducer
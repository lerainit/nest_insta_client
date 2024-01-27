import { incrementLikes, decrementLikes, setCounter } from "./actions";
import instance from "../../instance";

const initialValue = {
  counter: [],
  isLoading: true

}

const likesReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setCounter: {

      return { counter: action.payload, isLoading: false }
    }
    case incrementLikes: {
      let counterArr = action.payload.counter



      let user = action.payload.users[action.payload.authIndex]
        console.log(action.payload)
     let post =   counterArr.filter(el =>el.id == action.payload.id);


     console.log(post)
      post[0]?.likes.push(user)

        console.log(post)
      let  postObj = post[0]

     instance.put(`${process.env.REACT_APP_API_URL}/posts`, postObj
       )

      return { counter: counterArr, isLoading: false }
    }

    case decrementLikes: {
        let counterArr = action.payload.counter



        let user = action.payload.users[action.payload.authIndex]
        console.log(action.payload)
        let post =   counterArr.filter(el =>el.id == action.payload.id);


        console.log(post)
      let userIndex =   post[0].likes.findIndex(el =>el.id == user.id)
        post[0]?.likes.splice(userIndex,1)


        console.log(post)
        let  postObj = post[0]

        instance.put(`${process.env.REACT_APP_API_URL}/posts`, postObj)

        return { counter: counterArr, isLoading: false }
    }

    default: {
      return state
    }


  }



}
export default likesReducer
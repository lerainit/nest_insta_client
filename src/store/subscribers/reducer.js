import { setSubscribers, addAuthSubscriber, removeSubscriber } from "./actions";
import instance from "../../instance";

const initialValue = {
  value: [],
  isLoading: true,
  isSubscribed: false

}
const subscriberReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setSubscribers: {

      return {...state, value: action.payload, isLoading: false, isSubscribed: false }
    }

    case addAuthSubscriber: {
      let users = state.value
      let id = action.payload.id
      let user = users[action.payload.index]

      let subscribers = user.subscribers
      let authUser = users[action.payload.authIndex]

      users[action.payload.index].subscribers.push(authUser)
      users[action.payload.index].subscribers = subscribers

      instance.put(`${process.env.REACT_APP_API_URL}/users`, user
      )
      return {...state, value: users, isLoading: false, isSubscribed: true }

    }
    case removeSubscriber: {
      let users = state.value
      let id = action.payload.id
      let userArr = users.filter(el=>el.id == id)
      let user = userArr[0]

      let subscribers = user.subscribers


      userArr[0].subscribers.splice(action.payload.authIndex, 1)
     //user.subscribers = subscribers

      instance.put(`${process.env.REACT_APP_API_URL}/users`, user
      )
      return {...state, value: users, isLoading: false, isSubscribed: false }

    }

    default: {
      return state
    }

  }


}
export default subscriberReducer


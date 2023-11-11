import './App.scss';
import React, { useEffect } from 'react'
import Modal from './components/modal/modal'
import AppRoutes from './AppRoutes';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCardsAC } from './store/cards/actionCreator';
import { setCounterAC } from './store/likes/actionCreators'
import { setPostsAC } from './store/posts/actionCreators';
import { setUsersAC } from './store/users/actionCreators';
import { setBackgroundAC } from './store/cardBackground/actionCreators';
import { setSubscribersAC } from './store/subscribers/actionCreators';
import { setCommentsAC } from './store/comments/actionCreators';
import { setFollowersAC } from './store/followers/actionCreators';


const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store => store.modal.value)
  const isLoadingProducts = useSelector(store => store.products.isLoading)
  const isLoadingUsers = useSelector(store => store.users.isLoading)
  const isLoadingPosts = useSelector(store => store.posts.isLoading)
  const isLoadingCounter = useSelector(store => store.counter.isLoading)
  const isLoadingBackground = useSelector(store => store.background.isLoading)
  const isLoadingSubscribers = useSelector(store => store.subscribers.isLoading)
  const isLoadingComments = useSelector(store =>store.comments.isLoading)
  const isLoadingFollowers = useSelector(store => store.followers.isLoading)


  useEffect(() => {

  /* dispatch(setPostsAC())
    dispatch(setCardsAC())
    dispatch(setUsersAC())
    dispatch(setCounterAC())
    dispatch(setBackgroundAC())
    dispatch(setSubscribersAC())
    dispatch(setCommentsAC())
    dispatch(setFollowersAC())*/

    
  }, [])

  /*if ( ) {
    return (
      <>
        <h1>LOADING</h1>
      </>
    )
  }
  else {*/
    return (
      <>
        <div className='App'>

          <AppRoutes />

        </div>
        {modal &&
          <Modal ></Modal >}

      </>
    );
 // }
}

export default App
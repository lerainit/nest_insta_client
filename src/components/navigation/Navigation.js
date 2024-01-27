import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSubscribersAC } from '../../store/subscribers/actionCreators'
import { becomeFollowerAC } from '../../store/followers/actionCreators'
import { addAuthSubscriberAC } from '../../store/subscribers/actionCreators'
import { unFollowAC } from '../../store/followers/actionCreators'
import { setUsersAC } from '../../store/users/actionCreators'
import { removeSubscriberAC } from '../../store/subscribers/actionCreators'
import { setUserIndexAC } from '../../store/userIndex/actionCreators'

const Navigation = () => {

  const dispatch = useDispatch()
  const users = useSelector(store => store.followers.value)
  const authIndex = users?.findIndex(({ isAuth }) => isAuth === true)
  const authUser = users?.filter(el=>el.isAuth === true)[0]
  console.log(authUser)

  return (

    <header className={styles.header}>

      <NavLink className={styles.logo} to='/' ><h2 className={styles.logo} >Instagram</h2 ></NavLink>
        <button className='logout_btn' onClick={()=>{
            dispatch({type:'logOut',payload:authUser})
            window.location.reload()
        }}>Log out</button>
      <div className={styles.auth_container}>

        {users?.map(({ url, name, id, isAuth,nickName }, index) => isAuth ? <NavLink key={index} className={styles.cart_link} to={`/${nickName}`} onClick = {()=>{dispatch(setUserIndexAC(index))}} ><img className={styles.auth_img} src={url} alt="img" /><h2 className={styles.auth_name}>{name}</h2></NavLink> : null)

        }   </div>
      <div className={styles.container}>

        <h4>Suggestions for you</h4>
        {users?.map(({ url, name, id, isAuth, isFollower,nickName }, index) => isAuth || isFollower ? null : <div key={index} className={styles.user_container} ><NavLink  className={styles.cart_link} to={`/${nickName}`} onClick = {()=>{dispatch(setUserIndexAC(index))}}><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink><button onClick={
          async () => {

            await dispatch(setSubscribersAC())
            await dispatch(addAuthSubscriberAC({ id: id, index: index, authIndex: authIndex }))
            await dispatch(becomeFollowerAC({ userIndex: index, id: id }))
              await dispatch(setUsersAC())
          }
        }>Follow</button></div>)}

      </div>

      <h4>Following</h4>
      {users?.map(({ url, name, id, isAuth, isFollower,nickName }, index) => isFollower ? <div key={index}  className={styles.follower_container} ><NavLink className={styles.cart_link} to={`/${nickName}`} onClick = {()=>{dispatch(setUserIndexAC(index))}} ><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink><button onClick={
        async () => {
          await dispatch(removeSubscriberAC({ id: id, index: index, authIndex: authIndex }))
          await dispatch(unFollowAC({ userIndex: index, id: id }))
          await dispatch(setUsersAC())
        }
      }>Unfollow</button></div> : null)
      }
    </header>

  )


}
export default Navigation
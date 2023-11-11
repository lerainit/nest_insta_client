
import React from 'react'
import styles from './modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAC } from '../../store/modal/actionCreators'
import { incrementLikesAC, setCounterAC } from '../../store/likes/actionCreators'
import CommentsForm from '../commentsForm/commentsForm'
import { decrementLikesAC } from '../../store/likes/actionCreators'


const Modal = () => {

  const dispatch = useDispatch()

  const index = useSelector(store => store.cardIndex.value)
  const users = useSelector(store => store.users.value)
  const productsArr = useSelector(store => store.counter.counter)

  const userIndex1 = useSelector(store => store.userIndex.value)
  const user = users[userIndex1]
    const cardsOfUser = productsArr?.filter(el=> el.user.nickName === user.nickName)

  const userId = productsArr[userIndex1].userId

  let counter = cardsOfUser[index]?.likes
  const authIndex = users.findIndex(({ isAuth }) => isAuth === true)
  const authUser = users[authIndex]
  return (


    <div className={styles.modal}>
      <div className={styles.outer_container} onClick={() => { dispatch(closeModalAC()) }}></div>
      <div className={styles.modal_main_container} >

        <div className={styles.user_name_container}>
          <img className={styles.user_img} src={user.url} alt="user" />
          <h3 className={styles.user_name}>{user.name}</h3>
        </div>
        <img className={styles.modal_img} src={cardsOfUser[index].url} alt="post" />
        <div className={styles.comments}>
          {cardsOfUser[index].comments.map(({ userIndex, text },index) => <div className={styles.comment_container} key = {index}><div className={styles.user_container}><img className={styles.comment_user_img} src={users[userIndex].url} alt="user" /> <h3 className={styles.user_name}>{users[userIndex].name}</h3></div><h3 className={styles.comment}>{text}</h3></div>)}
          <h3 className={styles.user_name}><span className={styles.modal_span}>Likes</span>{counter.length}</h3>

          <svg onClick={async () => {
            await dispatch(setCounterAC())
              counter.filter(el=>el.id == authUser.id).length >0 ?  dispatch(decrementLikesAC({ users:users,authIndex:authIndex,counter:productsArr,url:cardsOfUser[index].url})) : dispatch(incrementLikesAC({users:users,authIndex:authIndex,counter:productsArr, url:cardsOfUser[index].url}))

          }}  className={styles.svg} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          viewBox="0 0 32 32">
       <g>
         <g id="heart_x5F_fill" 
           fill={productsArr[index].fill}
         >
           <g>
             <g>
               <path  d="M16,5.844C14.387,3.578,11.871,2,8.887,2C3.984,2,0,5.992,0,10.891v0.734L16.008,30L32,11.625
                 v-0.734C32,5.992,28.016,2,23.113,2C20.129,2,17.613,3.578,16,5.844z"/>
             </g>	</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
       </g>
       </svg>
          <CommentsForm index={index} userIndex={userIndex1} userId={userId} />

          <button className={styles.close_btn} onClick={() => { dispatch(closeModalAC()) }}>X</button>

        </div>
      </div>

    </div>

  )

}


export default Modal

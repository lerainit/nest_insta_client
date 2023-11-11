import React, {useEffect} from 'react'
import Card from '../../components/card/userPostCard'
import {useDispatch, useSelector} from 'react-redux'
import { shallowEqual } from 'react-redux'
import UserHeader from '../../components/userheader/userheader'
import { useParams } from 'react-router-dom'
import styles from './userPage.module.scss'
import {setUserAC} from "../../store/users/actionCreators";



const UserPage = () => {
     let {nickName } =  useParams()
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(setUserAC(nickName))


    },[])

let user = useSelector(store =>store.users.user)
    let users = useSelector(store =>store.users.value)

let userIndex = users?.findIndex(el => el.nickName == nickName)


console.log(user)

     const cardssArr = useSelector(store => store.products.value, shallowEqual)

    const cardsOfUser = cardssArr?.filter(el=> el.user.nickName === nickName)
   

     const posts = useSelector(store => store.comments.value)
  

     return (
          <>
               <UserHeader id={ user?.id} />

               <div className={styles.cards_wrapper}>
               { cardsOfUser?.map(({ id, name, url, hasBackground }, index) => <Card key={index} id={id} name={name} url={url} background={hasBackground ? true : false}  index={index} userIndex={userIndex} products={cardsOfUser} userPosts={cardsOfUser}></Card>)}
          </div>
          </>
     )

}
export default UserPage   
   

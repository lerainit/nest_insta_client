import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './userHeader.module.scss'
import { NavLink } from "react-router-dom";
import { setSubscribersAC, addAuthSubscriberAC, removeSubscriberAC } from "../../store/subscribers/actionCreators";
import { becomeFollowerAC, unFollowAC } from "../../store/followers/actionCreators";
import { setUsersAC } from "../../store/users/actionCreators";
import { setUsers } from "../../store/users/actions";

const UserHeader = (props) => {
    const dispatch = useDispatch()

    const users = useSelector(store => store.subscribers.value)
    const posts = useSelector(store => store.products.value)
    let id = props.id
    const subscribers = useSelector(store => store.users.value)
    const authIndex = users?.findIndex(({ isAuth }) => isAuth === true)
    const index = users?.findIndex(el => el.id == id)
    const postsOfUser = posts.filter(el=> el.user.id == id)
    console.log(index)

    const user =   users? users[index] : null


    return (

        <>

            <header className={styles.user_header}>
                <NavLink className={styles.logo_insta} to='/' ><h2 className={styles.logo_insta}>Instagram</h2 ></NavLink>
                <img className={styles.user_img} src={user?.url} alt='Avatar' />
                <div className={styles.content_container}>
                    <h2 className={styles.user_nickname}>{user?.nickName}</h2>

                    <h3 className={styles.user_posts}>{postsOfUser.length}<span className={styles.user_span}>posts</span></h3>
                    <h3 className={styles.user_subscribers}>{user?.subscribers?.length}<span className={styles.user_span}>followers</span></h3>

                    <h2 className={styles.user_name}>{user?.name}</h2>

                    <h3>{user?.info}</h3>
                </div>
                {!subscribers[index]?.isFollower && !user?.isAuth  &&
                    <button className={styles.subscribe_btn} onClick={async () => {
                        await dispatch(setSubscribersAC())
                        await dispatch(addAuthSubscriberAC({ id: id, index: index, authIndex: authIndex }))
                        dispatch({ type: setUsers, payload: users })
                       await  dispatch(becomeFollowerAC({ userIndex: index, id: id }))
                        await dispatch(setUsersAC())
                    }}>Subscribe</button>}
                {subscribers[index]?.isFollower && !user?.isAuth  &&
                    < button className={styles.subscribe_btn} onClick={async () => {
                       await  dispatch(removeSubscriberAC({ id: id, index: index, authIndex: authIndex }))
                        dispatch({ type: setUsers, payload: users })
                       await  dispatch(unFollowAC({ userIndex: index, id: id }))
                        await dispatch(setUsersAC())
                    }}>Unsubscribe</button>
                }
                {user?.isAuth &&
                    < button className={styles.subscribe_btn}>Edit profile</button>

                }
            </header>

        </>

    )


}
export default UserHeader

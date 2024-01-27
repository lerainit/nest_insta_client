import React from 'react'
import styles from './userCard.module.scss'
import { useDispatch } from 'react-redux';
import { openModalAC } from '../../store/modal/actionCreators';
import PropTypes from 'prop-types'
import { renderBackgroundAC } from '../../store/cardBackground/actionCreators';
import { hideBackgroundAC,setBackgroundAC } from '../../store/cardBackground/actionCreators';
import Background from './background';
import { setCardsAC } from '../../store/cards/actionCreator';
import { setUserIndexAC } from '../../store/userIndex/actionCreators'
import { setCommentsAC } from '../../store/comments/actionCreators';




const Card = ({ userPosts,  id,userIndex, index, background, url }) => {

  const dispatch = useDispatch();

  let storeBackground = background


  return (
    <>
      <div data-id={id} onMouseEnter={() => {
        dispatch(renderBackgroundAC({ index: index, cards:userPosts, background: background }))

        dispatch(setCardsAC())
      }} onMouseLeave={() => {

        dispatch(hideBackgroundAC({ index: index,  background: background,cards:userPosts }))

        dispatch(setCardsAC())
      }}
        className={styles.img_container}>

        <img className={styles.image} src={url} alt='Product ' data-id={id} />
        {storeBackground &&
          <Background handleClick={() => {
            dispatch(openModalAC())
            dispatch(setCommentsAC())
            dispatch(setUserIndexAC(userIndex))
            dispatch({ type: 'SET_VALUE_INDEX', payload: index })
          }
          } comments={userPosts[index].comments} index={index}  cards ={userPosts} />

        }

      </div>

    </>
  )
}
Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  art: PropTypes.number,
  id: PropTypes.number,
  fill: PropTypes.string

}
Card.defaultProps = {

  name: 'Product name',
  price: 0,
  url: '',
  art: 0,
  id: -1,
  fill: '#fff'

}
export default Card; 
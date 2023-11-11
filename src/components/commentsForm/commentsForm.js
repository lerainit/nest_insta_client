import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup'
import { addCommentsAC, setCommentsAC } from "../../store/comments/actionCreators";
import {setCards} from '../../store/cards/actions'
import styles from './commentsForm.module.scss'
import { setComments } from "../../store/comments/actions";



const CommentsForm = (props) => {
  const dispatch = useDispatch()

  const comments = useSelector(store => store.comments.value)
  const users = useSelector(store => store.users.value)
  const authIndex = users.findIndex(({ isAuth }) => isAuth === true)
    const postArr = comments.filter(el=>el.url == props.url)
    const post = postArr[0]

  let initialValues = {
    comment: '',

  }
  const validationSchema = yup.object().shape({
    comment: yup.string()
      .min(3, 'Min 3 symbols')
      .max(100, 'Max 100 symbols')
      .required('Text is required'),

  })
  return (

    <Formik
      initialValues={initialValues}

      validationSchema={validationSchema}
      onSubmit={async (values, FormikProps) => {
          const comment = { userIndex: authIndex, text: values.comment, isVisible: false }
          post.comments.push(comment)


       await fetch(`${process.env.REACT_APP_API_URL_POSTS}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        }).then(res => res.json())

        await dispatch(setCommentsAC())
       await dispatch(addCommentsAC({ comment:comment,post:post, posts: comments }))
       await dispatch({ type: setComments, payload: comments })
       await dispatch(setCommentsAC())
       await  dispatch({type:setCards})
      }}

    >
      {({ dirty, isValid }) => {

        return (
          <Form >

            <Field className={styles.form}
              type='text'
              name='comment'
              placeholder='Add comment'

            />
            <ErrorMessage name="comment">{msg => <span className={styles.error}>{msg}</span>}</ErrorMessage>

            <button className={styles.form_button} disabled={!dirty || !isValid} type="submit">Post</button>

          </Form>

        )
      }
      }
    </Formik>
  )
}
export default CommentsForm

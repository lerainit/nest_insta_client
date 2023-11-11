import { addComments, setComments, showComments } from "./actions";

const initialValue = {
    value: JSON.parse(localStorage.getItem('products')),
    isLoading: true,

}


const commentsReducer = (state = initialValue, action) => {

    switch (action.type) {
        case setComments: {

            return { value: action.payload, isLoading: false }
        }

        case addComments: {

           let postArr = action.payload.posts
           let comment = action.payload.comment
            let post = action.payload.post
            let postIndex = postArr.findIndex(el=>el.url == post.url)

            postArr[postIndex].comments.push(comment)
            postArr[postIndex].comments.reverse()
            postArr[postIndex].comments.map(el => el.isVisible = false)
            postArr[postIndex].comments[0].isVisible = true

            localStorage.setItem('products', JSON.stringify(postArr))

            return { value: JSON.parse(localStorage.getItem('products')), isLoading: false }
        }

        case showComments: {
            let postArr = action.payload.comments


            let postIndex = postArr.findIndex(el=>el.url == action.payload.url)
            console.log(postIndex)

          postArr[postIndex].comments.forEach(el => el.isVisible = true)

            localStorage.setItem('products', JSON.stringify(postArr))
            console.log(postArr[action.payload.index])

            console.log(postArr)
            return { value: JSON.parse(localStorage.getItem('products')), isLoading: false }
            return state

        }

        default: {
            return state
        }


    }


}

export default commentsReducer;



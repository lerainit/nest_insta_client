import { render, screen } from '@testing-library/react';
import CommentsForm from './commentsForm';

import { Provider } from "react-redux";
import store from '../../store'

const Component =() =>{
    return (
    <Provider store ={store}>
        <CommentsForm/>
    </Provider>
)}
describe('CommentsForm renders',()=>{

test('should CommentsForm match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
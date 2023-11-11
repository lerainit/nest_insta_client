import { render, screen } from '@testing-library/react';
import Card from './userPostCard';

import { Provider } from "react-redux";
import store from '../../store'

const Component =() =>{
    return (
    <Provider store ={store}>
        <Card/>
    </Provider>
)}
describe('Card renders',()=>{

test('should Card match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
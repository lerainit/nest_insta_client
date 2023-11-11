import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { Provider } from "react-redux";
import store from '../../store'
import { BrowserRouter } from 'react-router-dom';

const Component =() =>{
    return (
    <Provider store ={store}>
        <BrowserRouter>
        <Navigation/>
        </BrowserRouter>
    </Provider>
)}
describe('Navigation renders',()=>{

test('should Navigation match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})
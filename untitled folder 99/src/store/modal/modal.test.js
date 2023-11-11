import {screen,fireEvent,render} from '@testing-library/react'
import {Provider,useDispatch,useSelector} from 'react-redux'
import store from '../index'

import { openModalAC,closeModalAC } from './actionCreators'

const MockedModal = () =>{
return(
    <>
    <h1 data-testid = 'modal '>Modal</h1>
    </>
)
}


const Component = () => {
    const dispatch = useDispatch();
    const modal = useSelector(store =>store.modal.value)
    return (
        <>
            <button onClick={()=>{dispatch(openModalAC())}}
            >OPEN</button>
 { modal &&
       <MockedModal />}
 <button onClick={()=>{dispatch(closeModalAC())}}
            >CLOSE</button>     
        </>
    )
}

const MockedProvider = ({ children }) => (
    <Provider store={store}>
            <Component />
    </Provider>
)


describe('Modal open on state chnages', () => {
    test('should Modal open on background click', () => {
      render(<MockedProvider />);

        fireEvent.click(screen.getByText('OPEN'));
   

        expect(screen.queryByTestId('modal')).toBeInTheDocument();

    });
    test('should Modal open on background click', () => {
        render(<MockedProvider />);
  
          fireEvent.click(screen.getByText('CLOSE'));
     
  
          expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  
      }); 
})

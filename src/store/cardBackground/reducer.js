import { renderBackground,hideBackground,setBackground } from "./actions";
const initialValue = {
    value:JSON.parse(localStorage.getItem('products')) || [],
    isLoading:true
  
}


const BackgroundReducer =  (state =initialValue, action) =>{

  
        switch (action.type) {
            case setBackground:{
                return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }

            case renderBackground: {
              let productsArr = action.payload.cards
                let products = state.value

             //   console.log(products[action.payload.index])
              
                 productsArr[action.payload.index].hasBackground = true
                let index = products.findIndex(el=> el._id == productsArr[action.payload.index]._id)

                products[index].hasBackground=true

                console.log(products)

              localStorage.setItem('products',JSON.stringify(products))
   
               
                   return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }
      
            case hideBackground: {
                let productsArr = action.payload.cards
                let products= state.value
              productsArr[action.payload.index].hasBackground = false
                let index = products.findIndex(el=> el._id == productsArr[action.payload.index]._id)

                products[index].hasBackground=false
                localStorage.setItem('products',JSON.stringify(products))
  
                     return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
              }
          default:{
              return state
          }
        }
      };
      export default BackgroundReducer
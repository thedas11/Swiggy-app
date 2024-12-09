import { useSelector } from "react-redux"
import ItemCat from "./ItemsCat";
import { useDispatch } from "react-redux";

import { clearCart } from "../util/cartSlice";

const Cart = () =>{

    const cartItemsCheckout = useSelector((store) => store.cart.items)
 const dispatch = useDispatch()
    const handleClear = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center">  
        <h1 className="text-yellow-200 text-3xl bold">Your cart</h1>
     
        <button className="m-2 border border-black p-2 text-end" onClick={handleClear}>Clear Cart</button>
        <ItemCat menu ={cartItemsCheckout} />

        </div>
    )
}

export default Cart;
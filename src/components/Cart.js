import { useSelector } from "react-redux"
import ItemCat from "./ItemsCat";

const Cart = () =>{

    const cartItemsCheckout = useSelector((store) => store.cart.items)

    return(
        <div className="text-center">  
        <h1>cart</h1>
        {console.log(cartItemsCheckout)}


        <ItemCat menu ={cartItemsCheckout} />

        </div>
    )
}

export default Cart;
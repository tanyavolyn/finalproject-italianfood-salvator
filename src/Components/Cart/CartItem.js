
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";



const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();


    return(
   
        <div className="cart-item">
             <span className="cart-item-bild"> <img src={`./${dishes.img}.jpg`} width="100px" alt="Bild"/></span> 
            <p className="cart-item-name">{dishes.name}</p>
           <p className="cart-item-portionen">{cartItem.quantity} Portionen</p> 
           <p className="cart-item-price">Preis: {dishes.price * cartItem.quantity} €</p>
        <span className="cart-item-button" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}><img className="delete" src="delete_3405244.png" alt="delete"/></span>

        </div>

    )
}

export default CartItem;
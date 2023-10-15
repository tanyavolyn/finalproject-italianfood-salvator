import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return(
      
        <div className="dish"> 
        <div className="dish-unter">
        
            <img className="dish-img" src={`./${dish.img}.jpg`} alt="Bild"/>
            <div className="dish-price">
            <h3>{dish.name}</h3>
        
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

           <p className="dish-text">{dish.price} €</p>
           </div>
   
            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}><img src="cart_2420157.png" alt="Zum Einkaufskorb" width="35px"/></button>
            </div>
        </div>
       
    )
}

export default Dish;
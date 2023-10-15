import { useSelector } from 'react-redux';
import './App.css';
import CartItem from './Components/Cart/CartItem';
import { getCartItems, getTotalPrice } from './redux/cartSlice';



function App() {

  const cartItems = useSelector(getCartItems)
  const totalPrice = useSelector(getTotalPrice)
  return (
    <div className="cart-site">

      <div className='cart-block'>
{cartItems.map(cartItem => <CartItem cartItem={cartItem}/> 
)}
    
<hr></hr>
  <p className='total'>Total: {totalPrice.toFixed(2)} €</p>
  </div>

    </div>
  );
  
}

export default App;
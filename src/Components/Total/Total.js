import { useContext } from "react";
import { AppContext } from "../../App";
import './Total.css'

function Total({ onOrder }) {
  const { products, cart } = useContext(AppContext);

  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return total; // Ensure product exists
    return total + product.price * cart[productId];
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="container">
    <div className="Total flex">
      <h2 className="total_sec">Total</h2>
      <div className="tot_text ">
      <p className="total_txt" >Items: {totalItems}</p>
      <p className="total_price">Price: ${totalPrice}</p>
      </div>
    </div>
    </div>
  );
}

export default Total;
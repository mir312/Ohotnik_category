import "./AddToCart.css";
import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
import img_add from '../../img/kids_22.png'
export function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  return (
    <div className="AddToCart flex">
      <button onClick={onAddToCartClick}>Add to cart</button>
      {cart[product.id] ? cart[product.id] : 0}
      {/* <div className="AddToCartImg">
        <img src={img_add} alt="" className="add_img" />
      </div> */}
    </div>
   
  );
}
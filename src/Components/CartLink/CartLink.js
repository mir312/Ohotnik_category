import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink " >
      <Link to="/cart" className="cart_ic flex">
        <span className="cart_num">{total}</span>

        <i className="icons_head"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M16 2.41024C12.8665 2.41024 10.3175 5.06112 10.3175 8.32C10.3175 11.5789 12.8677 14.231 16 14.231C19.1323 14.231 21.6825 11.5802 21.6825 8.32C21.6825 5.06112 19.1323 2.41024 16 2.41024ZM16 16.64C11.5889 16.64 8 12.9075 8 8.32C8 3.73248 11.5889 0 16 0C20.4111 0 24 3.73248 24 8.32C24 12.9075 20.4111 16.64 16 16.64Z"
										fill="black" />
									<path
										d="M32 32H29.5385V30.1709C29.536 29.8253 29.3945 21.6371 20.9231 21.6371H11.0769C2.69292 21.6371 2.46769 29.8406 2.46154 30.1888V31.9987H0V30.1696C0.0603077 26.3629 2.45169 19.1987 11.0769 19.1987H20.9231C29.6849 19.1987 32 26.3757 32 30.1696V31.9987V32Z"
										fill="black" />
								</svg>
								</i>
        <i className="icons_head"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.45896 7.62555L0 32H32L30.541 7.62555H1.45896ZM3.81867 10.1885H28.1825L29.3345 29.437H2.66548L3.81748 10.1885H3.81867Z"
            fill="black" />
          <path
            d="M21.5917 7.78886C21.5917 4.89439 19.3019 2.53982 16.4871 2.53982C13.6723 2.53982 11.3825 4.89439 11.3825 7.78886H8.9126C8.9126 3.49408 12.3105 0 16.4871 0C20.6637 0 24.0616 3.49408 24.0616 7.78886H21.5917Z"
            fill="black" />
        </svg></i>


       
      </Link>
    </div>
  )
}
import './Logo.css';
import logo from '../../img/adidas.png'
import { Link } from 'react-router-dom';


function Logo() {
  return (
    <Link href="index.html" className="logo">
      <img src={logo} alt="" />
    </Link>
  );
}

export default Logo;
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Delivery from "./Pages/Delivery/Delivery";
import Category from "./Pages/Category/Category";
import NotFound from "./Pages/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import { onAuthChange, onCategoriesLoad, onOrdersLoad, onProductsLoad } from "./firebase";
import Product from "./Pages/Product/Product";
import { Cart } from "./Pages/Cart/Cart";
import ThankYou from "./Pages/ThankYou/ThankYou";
import Orders from "./Pages/Orders/Orders";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CategoryList from './Components/CategoryList/CategoryList';
// import AddCategory from './Components/AddCategory/AddCategory';
import Kids from './Pages/Kids/Kids';
import Image from './Pages/Image/Image';
import Men from './Pages/Men/Men';
import Sale from './Pages/Sale/Sale';
import Women from "./Pages/Women/Women";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  cart: {},
  setCart: () => { },
  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange(user => {
      if (user) {
        user.isAdmin = user && user.email === "dakievameerim0@gmail.com";
      }

      setUser(user);
    })
  }, []);



  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }} >
        <Header />
    
          <main class="flex">
            <CategoryList />
            {/* <AddCategory /> */}
            <div className="main_in">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="orders" element={<Orders />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="kids" element={<Kids />} />
                <Route path="men" element={<Men />} />
                <Route path="women" element={<Women />} />
                <Route path="sale" element={<Sale />} />
                <Route path="image" element={<Image />} />
                <Route path="cart" element={<Cart />} />
                <Route path="/categories/:slug" element={<Category />} />
                <Route path="/products/:slug" element={<Product />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            
          </main>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
import "./App.css";
import { BrowserRouter,  Route, Routes, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";
import ProductList from "./Pages/ProductList/ProductList";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import AddProducts from "./Pages/AddProducts/AddProducts";
import AdminOrderList from "./Pages/AdminOrderList/AdminOrderList";
import OrderDetails from "./Pages/AdminOrderList/OrderDetails";
import PrivateRoute from "./routes/PrivateRoute";


function App() {


  const [cartProducts, setCartProduct] = useState([]);
  const handleUpdateCart = (currentProduct) => {
    setCartProduct([...cartProducts, currentProduct]);
  };



    return (
      <BrowserRouter>
        <NavBar cartProducts={cartProducts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart
                  cartProducts={cartProducts}
                  setCartProduct={setCartProduct}
                />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-product"
            element={
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-list"
            element={
              <PrivateRoute>
                <ProductList handleUpdateCart={handleUpdateCart} />
              </PrivateRoute>
            }
          />
          <Route
            path="/order-list"
            element={
              <PrivateRoute>
                <AdminOrderList />
              </PrivateRoute>
            }
          />
          <Route
            path="order-list/:orderId"
            element={
              <PrivateRoute>
                <OrderDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="product-list/:productId"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
}
export default App;


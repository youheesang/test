import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./pages/Qna/QnaModal/ModalContext";

import React, { useState } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { Chair, Bed, Sofa, Closet, Bookshelf, Lighting, Best, New } from './pages/ProductList/ProductList';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Info from './pages/Join/Info';
import Agree from './pages/Join/Agree';
import Popup from './pages/Join/Popup';
import Qna from './pages/Qna/Qna';
import Mileage from './pages/MyPage/MyShop/Mileage';
import productList from './pages/ProductList/ProductList';
import ScrollTop from './components/ScrollToTop';
import Checkout from "./pages/Checkout/Checkout";
// import NewList from './pages/ProductList/NewList';
// import ProductList from './pages/ProductList'

function App() {
  //장바구니
  const [cart, setCart] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const handleCart = (cartItem) => {
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const convertPrice = (productPriceFormatted) => {
    return productPriceFormatted
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/mypage/mileage/*" element={<Mileage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/order/*" element={<Order />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/:mockList_id/*" element={<ProductDetail cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/New/*" element={<New cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Best/*" element={<Best cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Chair/*" element={<Chair cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Sofa/*" element={<Sofa cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Bed/*" element={<Bed cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Bookshelf/*" element={<Bookshelf cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Closet/*" element={<Closet cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/productList/Lighting/*" element={<Lighting cart={cart} setCart={setCart} handleCart={handleCart} />} />
          <Route path="/cart/*" element={<Cart cart={cart} handleCart={handleCart} convertPrice={convertPrice}
            setCart={setCart} isAllChecked={isAllChecked} setIsAllChecked={setIsAllChecked} />} />
          <Route path="/login/info" element={<Info />} />
          <Route path="/login/info/agree" element={<Agree />} />
          <Route path="/login/info/agree/popup" element={<Popup />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
        <Footer />
        <TopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;

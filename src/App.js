import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/orderReview" element={<OrderReview></OrderReview>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

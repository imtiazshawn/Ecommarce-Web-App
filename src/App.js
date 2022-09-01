import Cart from './Pages/Cart';
import CategoryPage from './Pages/CategoryPage';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <CategoryPage/> */}
      {/* <ProductPage/> */}
      {/* <Cart/> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/products' element={<CategoryPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </HashRouter>,
    </div>
  );
}

export default App;

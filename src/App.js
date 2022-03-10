import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterSection from './Components/FooterSection/FooterSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CartProvider from './Context/CartManagement/CartProvider';
import CategoryListingPage from './Pages/CategoryListingPage/CategoryListingPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LatestDropPage from './Pages/LatestDropPage/LatestDropPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/allCategories" element={<CategoryListingPage />} />
          <Route path="/latestdrops" element={<LatestDropPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        </Routes>
        <FooterSection />
      </CartProvider>
    </div>
  );
}

export default App;

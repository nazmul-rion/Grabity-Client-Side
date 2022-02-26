import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterSection from './Components/FooterSection/FooterSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ProductCard from './Components/ProductCard/ProductCard';
import SideMenu from './Components/SideMenu/SideMenu';
import CategoryListingPage from './Pages/CategoryListingPage/CategoryListingPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <div className="App">

      <NavigationBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allCategories" element={<CategoryListingPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/test" element={<ProductCard />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;

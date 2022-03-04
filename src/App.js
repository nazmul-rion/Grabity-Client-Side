import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterSection from './Components/FooterSection/FooterSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CategoryListingPage from './Pages/CategoryListingPage/CategoryListingPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LatestDropPage from './Pages/LatestDropPage/LatestDropPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allCategories" element={<CategoryListingPage />} />
        <Route path="/latestdrops" element={<LatestDropPage />} />
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;

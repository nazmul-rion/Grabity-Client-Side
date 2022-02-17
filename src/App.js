import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterSection from './Components/FooterSection/FooterSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SideMenu from './Components/SideMenu/SideMenu';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="sidebar">
        <SideMenu />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;

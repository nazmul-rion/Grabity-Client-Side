import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterSection from './Components/FooterSection/FooterSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import AuthProvider from './Context/Authentication/AuthProvider';
import CartProvider from './Context/CartManagement/CartProvider';
import CategoryListingPage from './Pages/CategoryListingPage/CategoryListingPage';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LatestDropPage from './Pages/LatestDropPage/LatestDropPage';
import DetailsSection from './Pages/ProductDetailsPage/OutletOfProduct/DetailsSection';
import DiscussionSection from './Pages/ProductDetailsPage/OutletOfProduct/DiscussionSection';
import OverViewSection from './Pages/ProductDetailsPage/OutletOfProduct/OverViewSection';
import PhotosSection from './Pages/ProductDetailsPage/OutletOfProduct/PhotosSection';
import QuestionAnswerSection from './Pages/ProductDetailsPage/OutletOfProduct/QuestionAnswerSection/QuestionAnswerSection';
import ReviewsSection from './Pages/ProductDetailsPage/OutletOfProduct/ReviewsSection/ReviewsSection';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';
import SigninPage from './Pages/SigninPage/SigninPage';
import SignupPage from './Pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <CartProvider>
          <NavigationBar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allCategories" element={<CategoryListingPage />} />
            <Route path="/latestdrops" element={<LatestDropPage />} />
            <Route path="/productdetails/:id" element={<ProductDetailsPage />} >
              <Route path="overview" element={<OverViewSection />} />
              <Route path="details" element={<DetailsSection />} />
              <Route path="reviews" element={<ReviewsSection />} />
              <Route path="photos" element={<PhotosSection />} />
              <Route path="questionanswer" element={<QuestionAnswerSection />} />
              <Route path="discussion" element={<DiscussionSection />} />

            </Route>

            <Route path="checkOutPage" element={<CheckOutPage />} />

            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
          <FooterSection />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

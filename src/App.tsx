import Logo from "./components/Logo/logo.tsx"
import Avatar from "./components/avatar/avatar.tsx"
import Header from "./components/header/header.tsx"
import ProductCard from "./components/productCard/productCard.tsx"
import RatingBar from "./components/ratingBar/ratingBar.tsx"
import Searchbar from "./components/searchbar/searchbar.tsx"
import ShopingCart from "./components/ShopingCart/ShoppingCart.tsx"
import Carousel from "./components/carousel/carousel.tsx"
import SellerDashBoardHeader from "./components/sellerdashboardheader/sellerdashboardheader.tsx";
import Slogan from "./components/slogan/slogan.tsx";
import Category from "./components/Category/category.tsx";
import About from "./components/about/about.tsx";
import ProductDescription from "./components/productDescription/productDescription.tsx";
import "./App.css";
function App() {
  

  return (
    <>
    
    <Header/>
   <SellerDashBoardHeader />
   <ProductDescription/>
        
    </>
  )
}

export default App

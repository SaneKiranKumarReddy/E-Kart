import "./App.css";
import Counter from "./components/Counter/Counter";
import Profile from "./components/Profile/Profile.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Products from "./components/Products/Products.jsx";
import Users from "./components/Users/Users.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import SignUp from "./components/signup/SignUp.jsx"
import Signin from "./components/signin/Signin.jsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails.jsx";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        

        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

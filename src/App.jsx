import {NavBar} from "./components/NavBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Products} from "./components/pages/Products.jsx";
import {Home} from "./components/pages/Home.jsx";
import {Features} from "./components/pages/Features.jsx";
import {Support} from "./components/pages/Support.jsx";
import {Footer} from "./components/pages/Footer.jsx";



function App() {

  return (


     /* Routeing system for Navigation*/
  <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path={"/products"} element={<Products/>}/>
          <Route path={"/features"} element={<Features/>}/>
          <Route path={"/products"} element={<Products/>}/>
          <Route path={"/support"} element={<Support/>}/>

          {/* Add more routes here */}
      </Routes>
      <Footer/>
  </BrowserRouter>
  )
}

export default App

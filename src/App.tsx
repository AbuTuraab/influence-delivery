

import './App.css'


import HomePage from './components/landingpage/HomePage'
import Navbar from './components/landingpage/NavBar'
import Influencers from "./components/influencers/Influencers"
import Footer from "./components/landingpage/footer"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  
} from "react-router-dom";
import Artboard from './components/artboard/Artboard'
import Products from './components/products/Products'
import Favorites from './components/favorites/Favorites'
import Filter from './components/filter/Filter'
import Profile2Page from './components/profile/Profile2'
import Profile6 from './components/profile/profile6'

function App() {
  

  return (
    <Router>
    <Navbar />
<Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/influencers" element={<Influencers />} />
<Route path="/artboard" element={<Artboard />}  />
<Route path='/products' element={<Products />} />
<Route path='/favorites' element={<Favorites />} />
<Route path='/filter' element={<Filter />} />
<Route path='/profile2' element={<Profile2Page />} />
<Route path='/profile6' element={<Profile6 />} />
</Routes>
 


    <Footer />
        
    </Router>
  )
}

export default App

import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Home from "./pages/home";
import Maps from "./pages/subpage/Maps";
import Mapsid from "./pages/subpage/Mapsid";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" index element={<Home />}></Route>
            <Route path="/Information/Maps" element={<Maps/>}></Route>
            <Route path="/Information/Maps/:id" element={<Mapsid/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;


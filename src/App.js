import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Home from "./pages/home";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" index element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;


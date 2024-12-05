import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import ElectronicPage from "./pages/ElectronicPage";
import FoodPage from "./pages/FoodPage";
import ChristmasPage from "./pages/ChristmasPage";
import OthersPage from "./pages/OthersPage";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          {/* Added routes for the dropdown menu items */}
          <Route path="/store/electronic" element={<ElectronicPage />} />
          <Route path="/store/food" element={<FoodPage />} />
          <Route path="/store/christmas" element={<ChristmasPage />} />
          <Route path="/store/others" element={<OthersPage />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;

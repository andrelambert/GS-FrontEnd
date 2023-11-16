import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts/auth";

// Importando componentes, Header e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import HomePage from "./routes/HomePage";
import MapPage from "./routes/MapPage";
import AprendaPage from "./routes/AprendaPage";
import Aprenda1 from "./routes/Aprenda1";
import Aprenda2 from "./routes/Aprenda2";
import Aprenda3 from "./routes/Aprenda3";
import Aprenda4 from "./routes/Aprenda4";
import SobrePage from "./routes/SobrePage";
import ContactPage from "./routes/ContactPage";
import ErrorPage from "./routes/ErrorPage"
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

// Importando CSS
import "./App.css"; // 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <AuthProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/aprenda" element={<AprendaPage />} />
        <Route path="/aprenda-1" element={<Aprenda1 />} />
        <Route path="/aprenda-2" element={<Aprenda2 />} />
        <Route path="/aprenda-3" element={<Aprenda3 />} />
        <Route path="/aprenda-4" element={<Aprenda4 />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
      </>
    </AuthProvider>  
  )
}

export default App;

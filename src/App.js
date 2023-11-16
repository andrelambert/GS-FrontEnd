import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts/auth";

// Importando componente Navbar
import Navbar from "./components/Navbar/Navbar";

// Importando Páginas (Routes)
import Home from "./routes/Home";
import Error from "./routes/Error"
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";

// Importando CSS
import "./App.css"; // 
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      </>
    </AuthProvider>  
  )
}

export default App;

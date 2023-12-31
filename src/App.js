import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider} from "./contexts/auth";
import useAuth from "./hooks/useAuth";

// Importando componentes Navbar e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import Home from "./routes/Home";
import Error from "./routes/Error"
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";

// Importando CSS
import "./App.css"; // 

const PrivateRoute = ({ element, ...rest }) => {
  const auth = useAuth();

  return auth.signed ? (
    element
  ) : (
    <Navigate to="/sign-in" replace/>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>  
  );
};

export default App;

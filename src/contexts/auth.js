import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import usersData from "../data/users.json"; // Importe os dados de usuário do arquivo JSON.

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      const storedUser = usersData.users.find(
        (userData) => userData.email === JSON.parse(userToken).email
      );

      if (storedUser) setUser(storedUser);
    }
  }, []);

  // Função LOGIN
  const signin = (email, password) => {
    const storedUser = usersData.users.find((userData) => userData.email === email);

    if (storedUser) {
      if (storedUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(storedUser);
        // Ir para home - não está funcionando 
        // navigate('/');
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

// Função CADASTRO 
  const signup = (email, password) => {
    const storedUser = usersData.users.find((userData) => userData.email === email);

    if (storedUser) {
      return "Já tem uma conta com esse E-mail";
    }

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
    navigate('/sign-in');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

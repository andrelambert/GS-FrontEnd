import { createContext, useEffect, useState } from "react";
import usersData from "../data/users.json"; // Importe os dados de usuário do arquivo JSON.
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      const storedUser = usersData.users.find(
        (userData) => userData.email === JSON.parse(userToken).email
      );

      if (storedUser) setUser(storedUser);
    }
  }, []);

  const signin = (email, password) => {
    const storedUser = usersData.users.find((userData) => userData.email === email);

    if (storedUser) {
      if (storedUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(storedUser);
        return Promise.resolve(); // Resolva a Promise em caso de sucesso
      } else {
        return Promise.reject("E-mail ou senha incorretos"); // Rejeite a Promise em caso de erro
      }
    } else {
      return Promise.reject("Usuário não cadastrado"); // Rejeite a Promise em caso de erro
    }
  };

  const signup = (email, password) => {
    const storedUser = usersData.users.find((userData) => userData.email === email);

    if (storedUser) {
      return Promise.reject("Já tem uma conta com esse E-mail");
    }

    const newUser = { email, password };

    // Faz uma solicitação POST para adicionar o novo usuário usando Axios
    return axios.post('http://localhost:8000/users', newUser)
      .then((response) => {
        // Atualiza o estado do usuário no contexto, se necessário
        setUser(newUser);

        console.log('Resposta do servidor:', response.data);

        // Resolva a Promise em caso de sucesso
        return Promise.resolve({ email, password });
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error.message);
        // Rejeite a Promise em caso de erro
        return Promise.reject('Erro ao adicionar usuário');
      });
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

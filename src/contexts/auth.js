import { createContext, useEffect, useState } from "react";
import usersData from "../data/users.json"; // Importe os dados de usuário do arquivo JSON.

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
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const storedUser = usersData.users.find((userData) => userData.email === email);

    if (storedUser) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = { email, password };
    usersData.users.push(newUser);

    // Atualize o arquivo JSON com o novo usuário.
    // Certifique-se de que essa ação possa ser realizada no ambiente de desenvolvimento.
    // Em um ambiente de produção, você usaria um servidor e um banco de dados.

    return;
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

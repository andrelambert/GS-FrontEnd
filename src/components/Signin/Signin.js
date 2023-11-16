import React, { useState } from "react";
import Input from "../Input/Input";
import { Button } from "../Button/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 4px 3px #ddd;
  background-color: white;
  max-width: 450px;
  padding: 40px;
  border-radius: 5px;
`;

const Label = styled.h2`
  font-size: 2.5rem;
  color: #263243;
  margin-bottom: 0.5em;
`;

const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;
const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="signinpage">
      <Container>
        <Content>
        <Label>LOGIN</Label>
          <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <LabelError>{error}</LabelError>
          <Button onClick={handleLogin} >Entrar</Button>
          <LabelSignup>
            Não tem uma conta?
            <Strong>
              <Link to="/sign-up">&nbsp;Registre-se</Link>
            </Strong>
          </LabelSignup>
        </Content>
      </Container>
    </div>  
  );
};

export default Signin;
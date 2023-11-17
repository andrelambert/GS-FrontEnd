import React, { useState } from "react";
import Input from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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
  width: 150%;
  box-shadow: 2px 2px 4px 3px #ddd;
  background-color: white;
  max-width: 600px;
  padding: 50px;
  border-radius: 10px;
`;

const Label = styled.h2`
  font-size: 3rem;
  color: #263243;
  margin-bottom: 0.5em;
`;

const LabelSignin = styled.label`
  font-size: 20px;
  color: #676767;
`;

const LabelError = styled.label`
  font-size: 18px;
  color: red;
`;

const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!name | !email | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(name, email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
  <div className="signuppage">  
    <Container>
      <Content>
      <Label>CADASTRO</Label>
        <Input
          type="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button onClick={handleSignup} >Registrar</Button>
        <LabelSignin>
          Já tem uma conta?
          <Strong>
            <Link to="/sign-in">&nbsp;Entre</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  </div>  
  );
};

export default Signup;
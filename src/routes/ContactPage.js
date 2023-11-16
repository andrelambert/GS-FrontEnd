import React, {useState} from "react";
import { Button } from '../components/Button/Button'; 
import styled from "styled-components";

const ContactPageForm = styled.form`
  display: block;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 3px #ddd;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
  max-height: 85%;
  max-width: 50%;
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    max-width: 75%;
    }
`;

const FormTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;

const FormText = styled.p`
  margin-bottom: 1em;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 16px 15px;
  margin-bottom: 1em;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
    }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 16px 15px;
  margin-bottom: 1em;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
    }
`;

const AlertMessage = styled.div`
  color: ${(props) => (props.success ? "#17cf97" : "red")};
  margin-top: 10px;
`;


function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the alert message when the user starts typing
    setAlertMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (!formData.email) {
      setAlertMessage("Por favor, insira seu email.");
    } else if (!formData.name) {
      setAlertMessage("Por favor, insira seu nome.");
    } else if (!formData.message) {
      setAlertMessage("Por favor, insira uma mensagem.");
    } else {
      // Send the form data or perform further actions (e.g., API request)
      setAlertMessage("Mensagem enviada com sucesso!");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contactpage">    
      <ContactPageForm onSubmit={handleSubmit}>
          <FormTitle>Entre em contato</FormTitle>
          <FormText>Dúvidas, críticas ou sugestões? Escreva para nós!</FormText>
          <FormInput
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormTextarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Escreva aqui"
            value={formData.message}
            onChange={handleChange}
          />
        
            <Button $contact type="submit" >Enviar</Button>
         
          <AlertMessage success={alertMessage === "Mensagem enviada com sucesso!"}>
            {alertMessage}
          </AlertMessage>
      </ContactPageForm>
    </div>  
  );
}

export default ContactPage;
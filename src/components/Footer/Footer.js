import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaAsterisk } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #4c1091;
  padding: 1rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
`;

const FooterSubscriptionHeading = styled.p`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: white; 
  @media screen and (max-width: 960px) {
    font-size: 1.0rem;
    }
`;

const FooterSubscriptionText = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    }
`;

const InputAreas = styled.div`
  display: flex;
  flex-direction: column; /* Changed to column for alignment */
  align-items: center;
`;

const FooterInput = styled.input`
  padding: 8px 25px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  margin-bottom: 16px;
  border: none;
  background-color: #f0f2f5;
`;

const SubscriptionMessage = styled.div`
  color: ${({ isSubscribed }) => (isSubscribed ? '#17cf97' : 'red')};
  margin-top: 8px; /* Added margin-top to separate message from button */
`;

const SocialMedia = styled.div`
  max-width: 900px;
  width: 100%;
  justify-content: space-between;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 960px) {
    width: 95%
    
    }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  @media screen and (max-width: 960px) {
    width: 150px;
    }
`;

const FooterLogo = styled(Link)`
  color: #17cf97;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
  &:hover {
    color: #17cf97;
  }
`;

function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = () => {
    if (!email) {
      setSubscriptionMessage('Por favor, insira seu email.');
    } else {
      // Perform subscription logic here (e.g., API request)
      // On success, set the success message and reset the email field
      setSubscriptionMessage('Obrigado por inscrever-se!');
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubscriptionHeading>
          Cadastre-se na nossa newsletter para ficar por dentro das novidades!
        </FooterSubscriptionHeading>
        <FooterSubscriptionText>
          Você pode cancelar a qualquer momento.
        </FooterSubscriptionText>
        <InputAreas>
          <FooterInput
            name='email'
            type='email'
            placeholder='Seu Email'
            value={email}
            onChange={handleEmailChange}
          />
          <Button $primary onClick={handleSubscription}>Cadastrar</Button>
        </InputAreas>
        <SubscriptionMessage isSubscribed={isSubscribed}>
          {subscriptionMessage}
        </SubscriptionMessage>
      </FooterSubscription>
   
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo to='/'>
            <FaAsterisk className='navbar-icon' />
            MedConnect
          </FooterLogo>
          <WebsiteRights>MedConnect © 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://youtu.be/dQw4w9WgXcQ?si=bF3s-8G02p6dwOyl' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://youtu.be/dQw4w9WgXcQ?si=bF3s-8G02p6dwOyl' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://youtu.be/dQw4w9WgXcQ?si=bF3s-8G02p6dwOyl' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://youtu.be/dQw4w9WgXcQ?si=bF3s-8G02p6dwOyl' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
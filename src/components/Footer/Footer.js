import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #263243;
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
  margin-bottom: 16px;
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

const FooterLinks = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  justify-content: center;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #17cf97;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
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
          Cadastre-se na nossa newsletter para aprender mais sobre reciclagem!
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
          <Button onClick={handleSubscription}>Cadastrar</Button>
        </InputAreas>
        <SubscriptionMessage isSubscribed={isSubscribed}>
          {subscriptionMessage}
        </SubscriptionMessage>
      </FooterSubscription>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLink to='/mapa'>Pontos de coleta</FooterLink>
            <FooterLink to='/aprenda'>Aprenda sobre reciclagem</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLink to='/sobre'>Sobre nós</FooterLink>
            <FooterLink to='/contato'>Fale conosco</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo to='/'>
            <FaRecycle className='navbar-icon' />
            Rota Sustentável
          </FooterLogo>
          <WebsiteRights>Rota Sustentável © 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://youtu.be/dQw4w9WgXcQ?si=bF3s-8G02p6dwOyl' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import { Button } from '../components/Button/Button'; 
import { Link } from 'react-router-dom';
import FotoCard1 from '../images/card1.png';
import FotoCard2 from '../images/card2.jpg';
import FotoCard3 from '../images/card3.jpg';
import FotoCard4 from '../images/card4.jpg';

const AprendaPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  @media screen and (max-width: 960px) {
    margin-top: 2rem;
  }
`;

const AprendaPageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;

const AprendaPageText = styled.p`
  margin-bottom: 1em;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  gap: 20px;
  max-width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const linkStyle = {
  textDecoration: 'none',
};

function AprendaPage() {
  const imgStyle = {
    height: '250px', // Set the desired height for all images
    objectFit: 'cover', // Maintain aspect ratio and cover the entire space
  };

  return (
    <div className="aprendapage">
      <AprendaPageContainer>
        <AprendaPageTitle>Aprenda</AprendaPageTitle>
        <AprendaPageText>Veja dicas de como reciclar corretamente</AprendaPageText>  
        <CardContainer>
          <Card style={{ width: '18rem', height: '30rem' }}>
            <Card.Img variant="top" src={FotoCard1} style={imgStyle}/>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>Quais resíduos são recicláveis?</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Veja aqui como separar os resíduos comuns dos recicláveis.
              </Card.Text>
            </Card.Body>
            <Link to="/aprenda-1" style={linkStyle}>
              <Button style={{ margin: '1rem auto', display: 'block', width: '12rem' }}>
                Saiba mais
              </Button>
            </Link>
          </Card>

          <Card style={{ width: '18rem', height: '30rem' }}>
            <Card.Img variant="top" src={FotoCard2} style={imgStyle}/>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>Dias e horários de coleta</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Saiba quando o caminhão de coleta passa na sua rua.
              </Card.Text>
            </Card.Body>
            <Link to="/aprenda-2" style={linkStyle}>
              <Button style={{ margin: '1rem auto', display: 'block', width: '12rem' }}>
                Saiba mais
              </Button>
            </Link>
          </Card>

          <Card style={{ width: '18rem', height: '30rem' }}>
            <Card.Img variant="top" src={FotoCard3} style={imgStyle} />
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>Reciclagem em condomínios</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Aprenda a organizar a coleta seletiva em seu condomínio.
              </Card.Text>
            </Card.Body>
            <Link to="/aprenda-3" style={linkStyle}>
              <Button style={{ margin: '1rem auto', display: 'block', width: '12rem' }}>
                Saiba mais
              </Button>
            </Link>
          </Card>

          <Card style={{ width: '18rem', height: '30rem' }}>
            <Card.Img variant="top" src={FotoCard4} style={imgStyle}/>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>Perguntas frequentes</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
               Aqui você encontra respostas para as principais dúvidas sobre reciclagem. 
              </Card.Text>
            </Card.Body>
            <Link to="/aprenda-4" style={linkStyle}>
              <Button style={{ margin: '1rem auto', display: 'block', width: '12rem' }}>
                Saiba mais
              </Button>
            </Link>
          </Card>
        </CardContainer>  
      </AprendaPageContainer>
    </div>
  );
}

export default AprendaPage;

import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Lista de resíduos recicláveis</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Metais</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Ferragens</li>
                  <li>Fios de cobre</li>
                  <li>Latas</li>
                  <li>Panelas sem cabo</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Papéis</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Papelão</li>
                  <li>Jornais</li>
                  <li>Revistas</li>
                  <li>Papel Alumínio</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Vidros</Accordion.Header>
              <Accordion.Body>
                <ul>
                    <li>Cacos de vidro</li>
                    <li>Frascos</li>
                    <li>Garrafas</li>
                    <li>Luminárias</li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Plásticos</Accordion.Header>
              <Accordion.Body>
                <ul>
                    <li>Acrílicos</li>
                    <li>Cápsulas de café</li>
                    <li>Embalagens</li>
                    <li>Sacos e sacolas</li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
      </div>
    </div>
    </>
  );
}

export default Aprenda1;

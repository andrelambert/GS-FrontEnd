import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Dias e horários de coleta</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Aclimação</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Alto de Pinheiros</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Bom Retiro</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Campo Belo</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Consolação</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Itaim Bibi</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Liberdade</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Moema</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
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

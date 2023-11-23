import React from "react";
import { Link } from 'react-router-dom';
import "../styles-sass/HomePage.scss"; 
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import { Button } from '../components/Button/Button';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Sua saúde na ponta dos dedos, de forma fácil e segura.</h1>
          </div>
          <div className="header-img">
            <img src={img2} alt="Header" />
          </div>
        </div>
      </header>

      <section className="intro-section">
        <h1>Bem-vindo à MedConnect, a revolução na gestão de informações médicas.</h1>
        <h2>
          Compreendemos os desafios enfrentados por médicos e pacientes na
          transferência de históricos médicos, e é por isso que desenvolvemos
          uma solução inovadora para facilitar esse processo. Seja para pacientes
          que desejam ter controle total sobre seu histórico ou profissionais de
          saúde em busca de eficiência, MedConnect é a resposta.
        </h2>
        <div className="intro-img">
            <img src={img3} alt="Intro" />
        </div>

      </section>

      <section className="highlight-section">
        <div className="patient-highlight">
          <h1>Para Pacientes</h1>
          <h2>
            <strong>Controle Total do Seu Histórico:</strong> Registre de forma
            fácil e intuitiva seu histórico médico, desde exames até cirurgias e
            comorbidades. Tenha tudo ao alcance de um clique, permitindo que
            você gerencie sua saúde de maneira proativa.
          </h2>
          <h2>
            <strong>Compartilhamento Seletivo:</strong> Durante consultas,
            escolha compartilhar seletivamente suas informações com seus
            profissionais de saúde. Mantenha-os informados de maneira rápida e
            eficaz.
          </h2>
        </div>

        <div className="healthcare-professional-highlight">
          <h1>Para Profissionais de Saúde</h1>
          <h2>
            <strong>Verificação de Identidade Rigorosa:</strong> Garantimos a
            integridade e autenticidade das informações, com um processo de
            verificação de identidade rigoroso para profissionais de saúde.
          </h2>
          <h2>
            <strong>Segurança em Primeiro Lugar:</strong> Utilizamos criptografia
            de ponta a ponta para garantir a máxima segurança durante a troca de
            informações. Seus dados e os de seus pacientes estão protegidos,
            estabelecendo um ambiente confiável para a troca de informações
            clínicas.
          </h2>
        </div>
      </section>

      <section className="efficiency-section">
        <h1>Compromisso com a Eficiência</h1>
        <h2>
          MedConnect não é apenas uma solução para transferência de históricos
          médicos, mas um passo à frente na busca por eficiência e agilidade no
          ambiente médico. Contribua para um atendimento mais efetivo, onde a
          informação flui de maneira rápida e segura, proporcionando o melhor
          cuidado possível.
        </h2>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-img">
            <img src={img1} alt="Cta" />
          </div>
          <div className="cta-text">
            <h1>
              Junte-se a nós na revolução da saúde. 
            </h1>
            <h2>
              Registre-se agora e
              experimente a transformação no gerenciamento de informações médicas.
              Seu histórico médico, sua saúde, em um só lugar.
            </h2>
            <div className="cta-button">
              <Link to ='/sign-up'>
                <Button >Registre-se</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomePage;

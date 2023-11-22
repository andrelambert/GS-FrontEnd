import React from "react";
import "../styles-sass/HomePage.scss"; 

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Sua Saúde na Ponta dos Dedos</h1>
      </header>

      <section className="intro-section">
        <p>
          Bem-vindo ao ID Médico, a revolução na gestão de informações médicas.
          Compreendemos os desafios enfrentados por médicos e pacientes na
          transferência de históricos médicos, e é por isso que desenvolvemos
          uma solução inovadora para facilitar esse processo. Seja para pacientes
          que desejam ter controle total sobre seu histórico ou profissionais de
          saúde em busca de eficiência, o ID Médico é a resposta.
        </p>
      </section>

      <section className="highlight-section">
        <div className="patient-highlight">
          <h2>Para Pacientes</h2>
          <p>
            <strong>Controle Total do Seu Histórico:</strong> Registre de forma
            fácil e intuitiva seu histórico médico, desde exames até cirurgias e
            comorbidades. Tenha tudo ao alcance de um clique, permitindo que
            você gerencie sua saúde de maneira proativa.
          </p>
          <p>
            <strong>Compartilhamento Seletivo:</strong> Durante consultas,
            escolha compartilhar seletivamente suas informações com seus
            profissionais de saúde. Mantenha-os informados de maneira rápida e
            eficaz.
          </p>
        </div>

        <div className="healthcare-professional-highlight">
          <h2>Para Profissionais de Saúde</h2>
          <p>
            <strong>Verificação de Identidade Rigorosa:</strong> Garantimos a
            integridade e autenticidade das informações, com um processo de
            verificação de identidade rigoroso para profissionais de saúde.
          </p>
          <p>
            <strong>Segurança em Primeiro Lugar:</strong> Utilizamos criptografia
            de ponta a ponta para garantir a máxima segurança durante a troca de
            informações. Seus dados e os de seus pacientes estão protegidos,
            estabelecendo um ambiente confiável para a troca de informações
            clínicas.
          </p>
        </div>
      </section>

      <section className="efficiency-section">
        <h2>Compromisso com a Eficiência</h2>
        <p>
          O ID Médico não é apenas uma solução para transferência de históricos
          médicos, mas um passo à frente na busca por eficiência e agilidade no
          ambiente médico. Contribua para um atendimento mais efetivo, onde a
          informação flui de maneira rápida e segura, proporcionando o melhor
          cuidado possível.
        </p>
      </section>

      <section className="cta-section">
        <p>
          Junte-se a nós na revolução da saúde. Registre-se agora e
          experimente a transformação no gerenciamento de informações médicas.
          Seu histórico médico, sua saúde, em um só lugar.
        </p>
        <button className="cta-button">Registre-se Agora</button>
      </section>
    </div>
  );
}

export default HomePage;

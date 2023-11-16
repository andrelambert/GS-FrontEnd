import React from "react";
import styled from "styled-components";

import QuemSomos from "../images/quemsomos2.jpg";


const SobrePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const SobrePageContainer2 = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 3px #ddd;
  padding: 50px;
  text-align: center;
  max-width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    max-width: 90%;
    }
`;

const SobrePageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const SobrePageText = styled.p`
  margin-bottom: 1em;
`;

const QuemSomosImage = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 5px; 
  margin-bottom: 50px;
`;

function SobrePage() {
  return (
    <div className="sobrepage">
      <SobrePageContainer>
        <SobrePageContainer2>
          <QuemSomosImage src={QuemSomos} alt="Quem Somos" />
          <SobrePageTitle>Quem somos</SobrePageTitle>
          <SobrePageText>Nós somos a Rota Sustentável, uma iniciativa inovadora focada na reciclagem e conscientização sustentável em São Paulo. Iniciamos este projeto em resposta ao desafio proposto pela IBM, com a missão de abordar a grave deficiência na reciclagem que afeta nosso meio ambiente, saúde pública e qualidade de vida. Atualmente, São Paulo recicla apenas 3% de seu lixo, e nosso objetivo é transformar essa realidade.</SobrePageText>
          <br></br>
          <SobrePageTitle>Nossa solução</SobrePageTitle>
          <SobrePageText>Nossa abordagem abrange diversas frentes. Através de um site intuitivo, conectamos os cidadãos aos pontos de reciclagem mais próximos e fornecemos informações claras sobre as melhores práticas de reciclagem. Além disso, planejamos a instalação de máquinas de reciclagem, as "Máquinas Verdes", que recompensarão os cidadãos por suas ações sustentáveis. Essa abordagem visa simplificar o processo de reciclagem e aumentar significativamente a taxa de reciclagem na cidade, reduzindo o lixo em aterros sanitários, a contaminação do solo e da água, e contribuindo para a redução das emissões de gases poluentes.</SobrePageText>
          <br></br>
          <SobrePageTitle>Nosso impacto</SobrePageTitle>
          <SobrePageText>A implementação da Rota Sustentável terá um impacto transformador na população de São Paulo. Aumentaremos a conscientização sobre a importância da reciclagem, melhorando a qualidade de vida dos cidadãos. Estamos confiantes de que, por meio da tecnologia, educação e incentivos tangíveis, podemos moldar um futuro mais sustentável, tornando São Paulo um exemplo de inovação ambiental e consciência coletiva. Junte-se a nós nessa jornada em direção a uma São Paulo mais verde e sustentável!</SobrePageText>
        </SobrePageContainer2>
      </SobrePageContainer>  
    </div>
  );
}

export default SobrePage;

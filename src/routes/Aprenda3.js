import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Aprenda a organizar a coleta seletiva no seu prédio ou condomínio</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1 - Separe os resíduos em dois</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Primeiro, é preciso encontrar um espaço para instalar contêineres de recicláveis ou disponibilizar lixeiras. Pode ser uma sala ou uma vaga de garagem inutilizada, entre outras possibilidades.

Nele, os moradores ou os coletores internos vão depositar os materiais recicláveis recolhidos dos apartamentos.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>2 - Armazenamento de resíduos</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>No local escolhido, você vai armazenar os recicláveis acumulados antes de descartá-los no dia e no horário do caminhão da coleta.

Você pode adesivar essa área com dicas e instruções para cada tipo de resíduo ou pode ter apenas um local para recolhê-los. O importante é facilitar a vida dos moradores.

Uma outra dica é disponibilizar caixas para o descarte correto de resíduos especiais: pilhas, lâmpadas, roupas, lixo eletrônico e óleo de cozinha.

Para os condomínios com espaços limitados, uma boa saída é usar contêineres de armazenamento.

As duas empresas de coleta que atendem a Prefeitura de São Paulo (Loga e EcoUrbis) disponibilizam gratuitamente esses contêineres e se responsabilizam pela sua manutenção.

seta4 Saiba como pedir os contêineres da coleta seletiva</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>3 - Descarte corretamente</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Agora que você organizou a coleta interna e o armazenamento, é hora do descarte externo.

Para isso, é necessário a capacitação da equipe responsável pela coleta dos recicláveis. O descarte deve seguir os dias e horários da coleta seletiva no seu bairro.

Para evitar o acúmulo excessivo na sala de armazenamento ou nos contêineres, é importante não perder o dia, nem a hora.

Os caminhões da coleta seletiva passam, no máximo, duas vezes por semana em cada uma das ruas atendidas.

Caso a sua rua não seja atendida pela coleta seletiva, o condomínio e seus moradores ficam responsáveis por encaminhar os recicláveis aos pontos de coleta da cidade ou podem contratar os serviços de uma empresa especializada.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>4 - Comunicação e educação ambiental</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Depois que você preparou o seu condomínio para ser ambientalmente responsável, é hora de conscientizar os moradores. A participação de todos é fundamental.

Existem diferentes canais de comunicação além dos avisos eletrônicos (elemidia) e impressos nos murais e elevadores. Os grupos de whatsapp e listas de e-mails, por exemplo, podem ser uma excelente opção.

O Recicla Sampa disponibiliza gratuitamente uma série de materiais informativos que vão te ajudar a realizar este trabalho!</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>5 - Monitoramento</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>O monitoramento é essencial para alcançar o sucesso. A equipe responsável deve verificar se a separação dos resíduos está realmente ocorrendo e se está correta. Dessa forma, conseguirá mapear os problemas e dificuldades de algum morador ou da equipe responsável e buscar soluções.

As ferramentas de comunicação ajudarão muito. Por exemplo, criar um grupo de WhatsApp para receber, enviar sugestões e dicas pode funcionar. Esse mesmo canal serve também para ouvir as opiniões e dúvidas de cada morador.

Uma outra ferramenta que pode ser utilizada é desenvolver um pequeno questionário para cada morador ou instalar uma caixa de sugestões, entre outros métodos.

Ao verificar alguma dificuldade de um morador, a equipe responsável pode fazer uma visita e explicar como deve ser feita a separação.

Outra ação que ajuda o engajamento é a divulgação dos resultados da coleta!

Agora você sabe como organizar e implementar a coleta de resíduos no seu condomínio, faça sua parte.

Nossa cidade agradece! </li>
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

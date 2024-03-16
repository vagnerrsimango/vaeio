import React from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";
import ServiceCard from "../ServiceCard";
import logo4 from "@/lib/img/modlog4.svg";
import PrimulaCard from "../primula/PrimulaCard";
import ic1 from "@/lib/img/icons8-money-96.png";
import ic2 from "@/lib/img/icons8-projects-96.png";
import ic3 from "@/lib/img/icons8-strategy-96.png";
import ConsultCard from "../ConsultCard";

const GuideC = () => {
  return (
    <section className="p-10">
      <p className="text-primary-0 text-3xl text-center mb-16 font-bold animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsultCard
          icon={ic1}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          subtitle="Serviço de Gestão Financeira"
          description="Com nossa expertise em gestão financeira, combinada com um compromisso
          inabalável com o sucesso de nossos clientes, você pode confiar em nós para fornecer soluções
          financeiras inteligentes e estratégicas que impulsionarão sua estabilidade financeira e o
          crescimento de seus negócios. Entre em contato connosco hoje mesmo para começar a trilhar o
          caminho para uma gestão financeira sólida e eficaz."
          dtdescription={
            <>
              <div className="text-left p-8 rounded-lg shadow-md">
                <strong className="text-xl">
                  Reestruturação de Créditos Bancários
                </strong>
                <p className="my-4">
                  Nossa equipe altamente qualificada está pronta para ajudá-lo a
                  optimizar suas finanças através da reestruturação de seus
                  créditos bancários. Seja reduzindo taxas de juros, prolongando
                  prazos de pagamento ou consolidando dívidas, estamos aqui para
                  ajudar a aliviar o fardo financeiro e melhorar sua
                  estabilidade econômica.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Soluções Personalizadas</strong>: Nossa abordagem
                  personalizada significa que criamos estratégias específicas
                  para atender às suas necessidades únicas.
                </p>
                <p className="mb-2">
                  <strong>Redução de Taxas de Juros</strong>: Com nossa ajuda,
                  podemos negociar com os bancos para reduzir suas taxas de
                  juros e aliviar sua carga financeira.
                </p>
                <p className="mb-2">
                  <strong>Prazos de Pagamento Estendidos</strong>: Prolongar os
                  prazos de pagamento pode tornar suas parcelas mais
                  gerenciáveis, permitindo que você respire mais facilmente.
                </p>
                <p className="mb-2">
                  <strong>Consolidação de Dívidas</strong>: Consolidar suas
                  dívidas em um único pagamento mensal pode simplificar sua vida
                  e economizar dinheiro.
                </p>
              </div>

              <div className="text-left p-8 rounded-lg shadow-md mt-8">
                <strong className="text-xl">
                  Análise e Reporte de Demonstração Financeira
                </strong>
                <p className="my-4">
                  Compreender o estado financeiro de sua empresa é fundamental
                  para o sucesso. Oferecemos análises abrangentes das
                  demonstrações financeiras da sua organização, revelando
                  insights valiosos que podem orientar suas decisões
                  estratégicas. Nossa equipe é especializada em traduzir números
                  em informações acionáveis, permitindo que você tome decisões
                  informadas para o crescimento sustentável.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Análise Abrangente</strong>: Identificamos tendências,
                  pontos fortes e áreas de melhoria para orientar suas
                  estratégias futuras.
                </p>
                <p className="mb-2">
                  <strong>Insights Valiosos</strong>: Análise de riscos e
                  oportunidades que podem impactar sua empresa.
                </p>
                <p className="mb-2">
                  <strong>Decisões Informadas</strong>: Fornecimento de
                  relatórios para tomada de decisões informadas e estratégicas.
                </p>
                <p className="mb-2">
                  <strong>Crescimento Sustentável</strong>: Nosso objetivo é
                  impulsionar o crescimento sustentável de sua empresa.
                </p>
              </div>

              <div className="text-left p-8 rounded-lg shadow-md mt-8">
                <strong className="text-xl">
                  Plano de Financiamento e Investimentos
                </strong>
                <p className="my-4">
                  Para alcançar seus objectivos financeiros a longo prazo, é
                  crucial ter um plano sólido de financiamento e investimentos.
                  Nossos especialistas trabalharão em estreita colaboração com
                  você para desenvolver um plano personalizado que alinhe suas
                  metas com estratégias de investimento eficazes. Seja para
                  aposentadoria, expansão de negócios ou outros projectos
                  financeiros, estamos comprometidos em ajudá-lo a alcançar seus
                  sonhos.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Personalização Total</strong>: Reconhecemos que cada
                  pessoa tem metas financeiras únicas. É por isso que
                  trabalhamos em estreita colaboração com você para criar um
                  plano totalmente personalizado que se alinha com suas ambições
                  e tolerância ao risco.
                </p>
                <p className="mb-2">
                  <strong>Estratégias Eficientes de Investimento</strong>:
                  Nossos especialistas em investimentos analisarão suas metas e
                  perfil de risco para desenvolver estratégias de investimento
                  eficazes que maximizem seus retornos a longo prazo.
                </p>
                <p className="mb-2">
                  <strong>Atingindo Seus Sonhos</strong>: Seja qual for o seu
                  sonho financeiro, estamos comprometidos em ajudá-lo a
                  alcançá-lo. Desde a aposentadoria tranquila até a realização
                  de grandes projetos, estamos aqui para fornecer orientação e
                  suporte ao longo do caminho.
                </p>
                <p className="mb-2">
                  <strong>Acompanhamento Contínuo</strong>: Estaremos ao seu
                  lado, revisando e ajustando seu plano conforme necessário para
                  garantir que você esteja sempre no caminho certo para alcançar
                  seus objetivos.
                </p>
              </div>
            </>
          }
        />

        <ConsultCard
          icon={ic2}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          subtitle="Serviço de Gestão de Projectos"
          description="Com nossa abordagem certificada pela ISO e nosso compromisso com a qualidade,
          sustentabilidade e segurança, estamos preparados para enfrentar desafios complexos de projetos com
          confiança. Ao escolher nossos serviços de Gestão de Projetos, você está escolhendo a excelência, a
          responsabilidade ambiental e a segurança em todas as fases do seu projecto. Junte-se a nós na jornada
          para o sucesso do seu projecto, onde qualidade, sustentabilidade e segurança são garantidas.
          "
          dtdescription={
            <>
              <div className="text-left p-8 rounded-lg shadow-md mt-4">
                <strong className="text-xl">Selo Made in Mozambique</strong>
                <p className="my-4">
                  Na busca por excelência na execução de projectos em
                  Moçambique, nossa equipe orgulhosamente ajuda aos clientes a
                  adquirirem o "Selo Made in Mozambique". Isso significa que
                  todos os nossos projectos são concebidos, planejados e
                  executados com uma abordagem profundamente enraizada na
                  cultura e nas práticas empresariais moçambicanas. Estamos
                  comprometidos em impulsionar o crescimento econômico local e
                  contribuir para o desenvolvimento sustentável de nosso país.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Raízes Locais, Impacto Global</strong>: Cada projecto
                  que empreendemos é mais do que uma simples realização, é uma
                  celebração da rica cultura e das práticas empresariais únicas
                  de Moçambique. Com o Selo Made in Mozambique, garantimos que
                  nossa abordagem seja genuinamente moçambicana, enquanto
                  alcançamos padrões de classe mundial.
                </p>
                <p className="mb-2">
                  <strong>Contribuindo para o Crescimento Econômico</strong>:
                  Estamos empenhados em impulsionar o crescimento econômico
                  local, fortalecendo a economia de Moçambique por meio de
                  nossos projectos. Ao escolher nossos serviços, você não apenas
                  investe em qualidade, mas também investe no futuro próspero de
                  nosso país.
                </p>
                <p className="mb-2">
                  <strong>Desenvolvimento Sustentável</strong>: Estamos
                  comprometidos com o desenvolvimento sustentável de Moçambique,
                  garantindo que nossos projetos tenham um impacto positivo
                  duradouro em nossa sociedade e meio ambiente.
                </p>
                <p className="mb-2">
                  <strong>Parceria Confiança</strong>: Trabalhamos em estreita
                  colaboração com nossos clientes, ouvindo atentamente suas
                  necessidades e visões.
                </p>
              </div>

              <div className="text-left p-8 rounded-lg shadow-md mt-4">
                <strong className="text-xl">
                  Plano de Gestão da Qualidade - ISO 9001:2015
                </strong>
                <p className="my-4">
                  A qualidade é o alicerce de todos os grandes projectos,
                  cumprimos rigorosamente a norma da ISO 9001:2015 para garantir
                  que todos os aspectos de implementação sejam observados para a
                  sua empresa. Nossos projectos são acompanhados pelo cliente e
                  optimizados através da melhoria contínua, isso significa que
                  você pode confiar na consistência, confiabilidade e excelência
                  em todas as etapas de seu projecto.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Padrões Internacionais de Excelência</strong>: Ao
                  adotar a norma ISO 9001:2015, a sua empresa estará
                  comprometida em alcançar e manter padrões internacionais de
                  excelência em todos os vossos projectos.
                </p>
                <p className="mb-2">
                  <strong>Acompanhamento Personalizado</strong>: Nossos
                  projectos são acompanhados de perto pelo cliente, garantindo
                  que suas expectativas sejam não apenas atendidas, mas
                  superadas.
                </p>
                <p className="mb-2">
                  <strong>Melhoria Contínua</strong>: Nosso compromisso com a
                  melhoria contínua significa que seus projectos são
                  constantemente optimizados e aprimorados ao longo do tempo.
                </p>
                <p className="mb-2">
                  <strong>Consistência e Confiabilidade</strong>: Com o Plano de
                  Gestão da Qualidade - ISO 9001:2015, você pode contar com a
                  consistência, confiabilidade e excelência em todas as etapas
                  do seu projeto.
                </p>
              </div>

              <div className="text-left p-8 rounded-lg shadow-md">
                <strong className="text-xl">
                  Plano de Gestão do Ambiente – ISO 14001:2015
                </strong>
                <p className="my-4">
                  Estamos profundamente comprometidos com a preservação do meio
                  ambiente e aderimos às diretrizes da ISO 14001:2015 para
                  gestão ambiental da sua empresa. Isso garante que nossos
                  projectos sejam planeados e executados de maneira
                  ecologicamente responsável, minimizando o impacto do cliente
                  no ambiente e promovendo práticas sustentáveis.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Compromisso com a Sustentabilidade</strong>: A
                  sustentabilidade está no centro de tudo o que fazemos. A
                  adesão à ISO 14001:2015 demonstra compromisso inabalável em
                  minimizar o impacto ambiental de projectos da empresa e
                  promover práticas sustentáveis.
                </p>
                <p className="mb-2">
                  <strong>Planeamento Responsável</strong>: Nosso objectivo é
                  minimizar o impacto ambiental, desde o planeamento até a
                  conclusão, garantindo que todas as actividades sejam
                  ecologicamente responsáveis.
                </p>
                <p className="mb-2">
                  <strong>Minimização do Impacto Ambiental</strong>: Com o Plano
                  de Gestão do Ambiente - ISO 14001:2015, você pode ter certeza
                  de que seu projeto será conduzido de maneira a reduzir
                  significativamente seu impacto no meio ambiente.
                </p>
                <p className="mb-2">
                  <strong>Promoção de Práticas Sustentáveis</strong>: Além de
                  minimizar o impacto ambiental, também trabalhamos para
                  promover práticas sustentáveis em todas as áreas de seu
                  negócio. Desde a conservação de recursos naturais até a
                  redução de resíduos, estamos empenhados em criar um futuro
                  mais verde e saudável para todos.
                </p>
              </div>

              <div className="text-left  p-8 rounded-lg shadow-md mt-4">
                <strong className="text-xl">
                  Gestão de Segurança e Saúde Ocupacional
                  <span className="font-bold">– ISO 45001:2018</span>
                </strong>
                <p className="my-4">
                  A segurança e o bem-estar dos colaboradores e parceiros são de
                  extrema importância para actividade de uma empresa. Cumprimos
                  com rigorosidade a ISO 45001:2018 para garantir um ambiente de
                  trabalho seguro e saudável para implementar o Sistema de
                  Gestão de Segurança e Saúde Ocupacional na sua empresa. Nossa
                  prioridade é proteger vidas e minimizar riscos.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className=" mb-2">
                  <strong>Compromisso Inabalável</strong>: : Com a ISO
                  45001:2018, implementamos um Sistema de Gestão de Segurança e
                  Saúde Ocupacional para garantir que cada pessoa em sua empresa
                  possa trabalhar com confiança e tranquilidade.
                </p>
                <p className="mb-2">
                  <strong>Ambiente de Trabalho Seguro</strong>: Nosso objectivo
                  é criar um ambiente de trabalho seguro e saudável, onde cada
                  colaborador se sinta protegido e respeitado, minimizando os
                  riscos de lesões ou acidentes.
                </p>
                <p className="mb-2">
                  <strong>Proteção de Vidas</strong>: Desde a identificação de
                  riscos até a implementação de medidas preventivas, nosso
                  objetivo é proteger não apenas a segurança física, mas também
                  a saúde mental e emocional de seus colaboradores.
                </p>
                <p className="mb-2">
                  <strong>Parceria Confiável</strong>: Trabalhamos em estreita
                  colaboração com sua empresa, adaptando nossos serviços às suas
                  necessidades específicas. Com nossa orientação especializada,
                  você pode confiar que seu ambiente de trabalho estará em
                  conformidade com os mais altos padrões de segurança e saúde
                  ocupacional.
                </p>
              </div>
            </>
          }
        />

        <ConsultCard
          icon={ic3}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          subtitle="Serviço de Gestão Estratégica"
          description="Com nossos serviços de Gestão Estratégica, você terá a orientação necessária para
          transformar seus objectivos em realidade. Não importa o tamanho ou a indústria de sua empresa,
          estamos comprometidos em fornecer soluções estratégicas que impulsionarão o crescimento sustentável
          e o sucesso a longo prazo. Junte-se a nós para moldar o futuro de sua organização e alcançar novos
          patamares de excelência."
          dtdescription={
            <>
              <div className="text-left p-8 rounded-lg shadow-md">
                <strong className="text-xl">
                  Planos Estratégicos e de Negócios
                </strong>
                <p className="my-4">
                  Com nossos serviços de Gestão Estratégica, você terá a
                  orientação necessária para transformar seus objectivos em
                  realidade. Não importa o tamanho ou a indústria de sua
                  empresa, estamos comprometidos em fornecer soluções
                  estratégicas que impulsionarão o crescimento sustentável e o
                  sucesso a longo prazo. Junte-se a nós para moldar o futuro de
                  sua organização e alcançar novos patamares de excelência.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Personalização Total</strong>: Reconhecemos que cada
                  empresa é única, e é por isso que nossos planos são totalmente
                  personalizados para atender às suas necessidades específicas.
                  Desde startups até empresas estabelecidas, adaptamos nossas
                  estratégias para se alinharem perfeitamente com sua visão e
                  metas.
                </p>
                <p className="mb-2">
                  <strong>Visão Clara para o Futuro</strong>: Identificamos
                  oportunidades de crescimento, definimos metas alcançáveis e
                  delineamos estratégias claras para alcançar o sucesso a longo
                  prazo.
                </p>
                <p className="mb-2">
                  <strong>Decisões Informadas</strong>: Com nossos planos
                  estratégicos em mãos, você terá as informações necessárias
                  para tomar decisões fundamentadas e estratégicas em todas as
                  áreas de sua empresa.
                </p>
                <p className="mb-2">
                  <strong>Resultados Sustentáveis</strong>: Nosso objetivo é
                  ajudá-lo a alcançar resultados sustentáveis e duradouros. Com
                  uma abordagem estratégica sólida, você estará preparado para
                  enfrentar desafios, aproveitar oportunidades e alcançar
                  resultados consistentes ao longo do tempo.
                </p>
              </div>

              <div className="text-left p-8 rounded-lg shadow-md">
                <strong className="text-xl">
                  Planos Comerciais e de Marketing
                </strong>
                <p className="my-4">
                  A conquista de mercado é essencial para o sucesso de qualquer
                  empresa. Nossos Planos Comerciais e de Marketing são
                  projetados para posicionar sua marca de forma competitiva e
                  eficaz. Utilizando estratégias de marketing modernas e
                  abordagens de vendas orientadas para o cliente, ajudaremos a
                  impulsionar o crescimento de seus negócios e a maximizar sua
                  presença no mercado. Seja expandindo seu alcance online,
                  melhorando sua estratégia de vendas ou desenvolvendo campanhas
                  de marketing personalizadas, estamos aqui para impulsionar
                  seus resultados comerciais.
                </p>
                <p className="text-lg font-bold mb-2">O Que Esperar?</p>
                <p className="mb-2">
                  <strong>Posicionamento Estratégico da Marca</strong>: Nosso
                  plano visa posicionar sua marca de forma estratégica,
                  destacando seus diferenciais competitivos e conectando-se de
                  forma significativa com seu público-alvo.
                </p>
                <p className="mb-2">
                  <strong>Estratégias de Marketing Inovadoras</strong>:
                  Utilizamos as últimas tendências e tecnologias de marketing
                  para expandir seu alcance online, criar engajamento com seu
                  público e aumentar as conversões.
                </p>
                <p className="mb-2">
                  <strong>Abordagem Orientada para o Cliente</strong>: Colocamos
                  seus clientes no centro de nossas estratégias, garantindo que
                  todas as iniciativas de marketing e vendas sejam projetadas
                  para atender às suas necessidades e desejos.
                </p>
                <p className="mb-2">
                  <strong>Maximize Resultados Comerciais</strong>: Seja
                  expandindo suas operações, melhorando suas estratégias de
                  vendas ou desenvolvendo campanhas de marketing personalizadas,
                  estamos comprometidos em impulsionar seus resultados
                  comerciais e levá-lo ao próximo nível de sucesso.
                </p>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};

export default GuideC;

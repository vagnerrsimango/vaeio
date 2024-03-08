import React from "react";
import { FaGlobe, FaEnvelope, FaDesktop, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "../ServiceCard";
import logo4 from "@/lib/img/modlog4.svg";
import PrimulaCard from "../primula/PrimulaCard";
import ConsultCard from "../ConsultCard";

const GuideC = () => {
  return (
    <section className="p-10">
      <p className="text-primary-0 text-3xl text-center mb-16 font-bold animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsultCard
          icon={logo4}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          subtitle="Serviço de Gestão Financeira"
          description="Com nossa expertise em gestão financeira, combinada com um compromisso
          inabalável com o sucesso de nossos clientes, você pode confiar em nós para fornecer soluções
          financeiras inteligentes e estratégicas que impulsionarão sua estabilidade financeira e o crescimento de
          seus negócios. Entre em contato connosco hoje mesmo para começar a trilhar o caminho para uma
          gestão financeira sólida e eficaz."
          dtdescription={
            <>
              <div>
                <strong>Reestruturação de Créditos Bancários:</strong>
                <p>
                  Nossa equipe altamente qualificada está pronta para ajudá-lo a
                  optimizar suas finanças através da reestruturação de seus
                  créditos bancários. Seja reduzindo taxas de juros, prolongando
                  prazos de pagamento ou consolidando dívidas, estamos aqui para
                  ajudar a aliviar o fardo financeiro e melhorar sua
                  estabilidade econômica.
                </p>
              </div>
              <div>
                <strong>Análise e Reporte de Demonstração Financeira:</strong>
                <p>
                  Compreender o estado financeiro de sua empresa é fundamental
                  para o sucesso. Oferecemos análises abrangentes das
                  demonstrações financeiras da sua organização, revelando
                  insights valiosos que podem orientar suas decisões
                  estratégicas. Nossa equipe é especializada em traduzir números
                  em informações acionáveis, permitindo que você tome decisões
                  informadas para o crescimento sustentável.
                </p>
              </div>
              <div>
                <strong>Plano de Financiamento e Investimentos:</strong>
                <p>
                  Para alcançar seus objetivos financeiros a longo prazo, é
                  crucial ter um plano sólido de financiamento e investimentos.
                  Nossos especialistas trabalharão em estreita colaboração com
                  você para desenvolver um plano personalizado que alinhe suas
                  metas com estratégias de investimento eficazes. Seja para
                  aposentadoria, expansão de negócios ou outros projetos
                  financeiros, estamos comprometidos em ajudá-lo a alcançar seus
                  sonhos.
                </p>
              </div>
            </>
          }
        />

        <ConsultCard
          icon={logo4}
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
              <div>
                <strong>Selo Made in Mozambique:</strong>
                <p>
                  Na busca por excelência na execução de projetos em Moçambique,
                  nossa equipe orgulhosamente ajuda aos clientes a adquirirem o
                  Selo Made in Mozambique. Isso significa que todos os nossos
                  projetos são concebidos, planejados e executados com uma
                  abordagem profundamente enraizada na cultura e nas práticas
                  empresariais moçambicanas. Estamos comprometidos em
                  impulsionar o crescimento econômico local e contribuir para o
                  desenvolvimento sustentável de nosso país.
                </p>
              </div>
              <div>
                <strong>Gestão da Qualidade - ISO 9001:2015:</strong>
                <p>
                  A qualidade é o alicerce de todos os grandes projetos,
                  cumprimos rigorosamente a norma da ISO 9001:2015 para garantir
                  que todos os aspectos de implementação sejam observados para a
                  sua empresa. Nossos projetos são acompanhados pelo cliente e
                  otimizados através da melhoria contínua, isso significa que
                  você pode confiar na consistência, confiabilidade e excelência
                  em todas as etapas de seu projeto.
                </p>
              </div>
              <div>
                <strong>Gestão do Ambiente – ISO 14001:2015:</strong>
                <p>
                  Estamos profundamente comprometidos com a preservação do meio
                  ambiente e aderimos às diretrizes da ISO 14001:2015 para
                  gestão ambiental da sua empresa. Isso garante que nossos
                  projetos sejam planejados e executados de maneira
                  ecologicamente responsável, minimizando o impacto do cliente
                  no ambiente e promovendo práticas sustentáveis.
                </p>
              </div>
              <div>
                <strong>
                  Gestão de Segurança e Saúde Ocupacional – ISO 45001:2018:
                </strong>
                <p>
                  A segurança e o bem-estar dos colaboradores e parceiros são de
                  extrema importância para atividade de uma empresa. Cumprimos
                  com rigorosidade a ISO 45001:2018 para garantir um ambiente de
                  trabalho seguro e saudável para implementar o Sistema de
                  Gestão de Segurança e Saúde Ocupacional na sua empresa. Nossa
                  prioridade é proteger vidas e minimizar riscos.
                </p>
              </div>
            </>
          }
        />

        <ConsultCard
          icon={logo4}
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
              <p className="mt-4">
                <strong>Planos Estratégicos e de Negócios:</strong>
              </p>
              <ul>
                <li>
                  Se você está buscando definir um rumo claro para o crescimento
                  e sucesso de sua organização, nossos Planos Estratégicos e de
                  Negócios são a chave para alcançar seus objetivos. Nossa
                  equipe de especialistas trabalhará em estreita colaboração com
                  você para desenvolver planos personalizados que detalham a
                  visão, missão e metas de sua empresa. Com uma abordagem
                  estratégica sólida, você estará preparado para tomar decisões
                  informadas e alcançar resultados sustentáveis.
                </li>
              </ul>
              <p>
                <strong>Planos Comerciais e de Marketing:</strong>
              </p>
              <ul>
                <li>
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
                </li>
              </ul>
            </>
          }
        />
      </div>
    </section>
  );
};

export default GuideC;

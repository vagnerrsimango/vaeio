import React from "react";
import logo1 from "@/lib/img/modlog1.svg";
import logo2 from "@/lib/img/modlog2.svg";
import logo3 from "@/lib/img/modlog3.svg";
import logo4 from "@/lib/img/modlog4.svg";
import PrimulaCard from "./PrimulaCard";
import useEmblaCarousel from "embla-carousel-react";
import "animate.css";

const GuidePrimula = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="text-center">
      <p className="text-primary-0 text-3xl font-bold mb-8 md:mb-16">
        MÓDULOS DO PRIMULA
      </p>
      <p className="text-primary-0">
        Composto por um total de 6 módulos, o prímula te oferece as ferramentas
        indispensáveis para a sua empresa
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PrimulaCard
          icon={logo1}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Software de Finanças, fornece às empresas as ferramentas necessárias para gerir
          eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões
          informadas com base em dados financeiros precisos."
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Gestão de Requisições</h3>
                  <p>
                    <strong>Solicitações de Finanças:</strong> Permite que os
                    utilizadores criem e façam gestão de solicitações de
                    finanças, como pedidos de pagamento e aprovações.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    2. Ordens de Pagamento/Tesouraria
                  </h3>
                  <p>
                    <strong>Gestão de Pagamentos:</strong> Facilita a criação e
                    execução de ordens de pagamento, auxiliando no controlo dos
                    fluxos de tesouraria.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">3. Mapas</h3>
                  <p>
                    <strong>Visualização de Dados Financeiros:</strong> Oferece
                    mapas que apresentam dados financeiros de forma organizada e
                    compreensível.
                  </p>
                  <p>
                    <strong>Resumo de Contas Bancárias:</strong> Gera extratos
                    detalhados de contas bancárias, destacando transações e
                    saldos.
                  </p>
                  <p>
                    <strong>Resumo de Caixa:</strong> Apresenta um resumo das
                    transações e saldos de caixa da empresa.
                  </p>
                  <p>
                    <strong>Análise de Fluxo de Caixa:</strong> Cria
                    demonstrações que mostram a entrada e saída de dinheiro ao
                    longo de um período específico.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">4. Simulações Financeiras</h3>
                  <p>
                    <strong>Projeções Financeiras:</strong> Permite simular
                    cenários financeiros para prever impactos nas finanças da
                    empresa.
                  </p>
                  <p>
                    <strong>Empréstimos:</strong> Gestão de Empréstimos:
                    Facilita o acompanhamento de empréstimos, incluindo
                    pagamentos e taxas de juros.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">5. Relatórios</h3>
                  <p>
                    <strong>Informações Financeiras Detalhadas:</strong> Oferece
                    uma variedade de relatórios detalhados sobre passivos
                    correntes, ativos correntes e outras métricas financeiras.
                  </p>
                  <p>
                    <strong>Gestão de Dívidas:</strong> Ajuda a monitorizar e
                    gerir as obrigações financeiras da empresa, como dívidas com
                    fornecedores, empréstimos e provisões.
                  </p>
                  <p>
                    <strong>Gestão de Ativos:</strong> Facilita o controlo de
                    ativos líquidos, como contas a receber de clientes, caixa e
                    bancos, bem como inventários.
                  </p>
                </div>
              </div>
            </>
          }
          func="Gestão de Requisições, Ordens de Pagamento/Tesouraria, Mapas, Extracto de Bancos, Extracto de Caixa, Demonstrações de Fluxo de Caixa, Simulações, Empréstimos, Relatórios"
        />

        <PrimulaCard
          icon={logo2}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO RECURSOS HUMANOS"
          description="Gestão de Recursos Humanos eficaz, permite a gestão de informações dos
          colaboradores, o processamento de salários e a optimização de processos de recrutamento e
          seleção.
          "
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Processo Individual</h3>
                  <p>
                    <strong>Gestão de Perfis de Colaboradores:</strong> Essa
                    funcionalidade permite a criação e o armazenamento de perfis
                    individuais para cada colaborador da empresa. Informações
                    pessoais, de contato e de emprego podem ser gerenciadas
                    nesses perfis.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">2. Recrutamento</h3>
                  <p>
                    <strong>Rastreamento de Candidatos:</strong> O módulo de
                    Recrutamento permite rastrear o processo de recrutamento,
                    desde a publicação de vagas até a seleção final de
                    candidatos.
                  </p>
                  <p>
                    <strong>Acompanhamento de Candidatos:</strong> Regista as
                    etapas pelas quais os candidatos passam, incluindo
                    entrevistas, testes e verificações de referência.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">3. Requisição Interna de RH</h3>
                  <p>
                    <strong>Solicitação de Novos Colaboradores:</strong> Permite
                    que os departamentos internos da empresa solicitem a
                    contratação de novos colaboradores diretamente ao
                    departamento de Recursos Humanos.
                  </p>
                  <p>
                    <strong>Formulário de Job Description:</strong> Descrição de
                    Cargos: Criação de descrições de cargos detalhadas que são
                    utilizadas para anunciar vagas em aberto. Essas descrições
                    podem ser enviadas para o site da empresa para receber
                    candidaturas.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">4. Candidaturas</h3>
                  <p>
                    <strong>Base de Dados de Candidatos:</strong> Armazena
                    informações sobre candidatos que se inscreveram para vagas
                    de emprego na empresa. Isso inclui currículos, informações
                    de contato e histórico de candidaturas.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    5. Formulários de Entrevista
                  </h3>
                  <p>
                    <strong>Entrevistas Estruturadas:</strong> Permite a criação
                    de formulários de entrevista personalizados que podem ser
                    usados pelos departamentos de Recursos Humanos e gerentes de
                    contratação para avaliar candidatos.
                  </p>
                  <p>
                    <strong>Geração de Relatórios de Entrevista:</strong> Com
                    base nas respostas dadas pelos candidatos durante as
                    entrevistas, é possível gerar relatórios de avaliação.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    6. Processamento de Salários
                  </h3>
                  <p>
                    <strong>Gestão de Remuneração:</strong> Permite calcular
                    salários com base nas informações de frequência, faltas e
                    horas extras dos colaboradores.
                  </p>
                  <p>
                    <strong>Introdução de Faltas e Horas Extras:</strong> Os
                    departamentos de Recursos Humanos podem introduzir o número
                    de faltas e horas extras de cada colaborador para
                    processamento de salários.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">7. Mapa de Salários</h3>
                  <p>
                    <strong>Resumo de Salários:</strong> Gera um resumo dos
                    salários de todos os colaboradores da empresa com base nas
                    informações inseridas nas operações de processamento de
                    salários.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">8. Mapas</h3>
                  <p>
                    <strong>Visualização Gráfica:</strong> Permite a
                    visualização gráfica de dados relacionados a salários,
                    faltas e horas extras.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    9. Extracto de Salários (Colaborador)
                  </h3>
                  <p>
                    <strong>Resumo Individual de Salário:</strong> Oferece a
                    cada colaborador a possibilidade de visualizar um resumo de
                    seus salários, incluindo detalhes sobre descontos, bônus e
                    pagamentos.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">10. Relatórios</h3>
                  <p>
                    <strong>Nr. de Faltas:</strong> Gera relatórios que destacam
                    o número de faltas de cada colaborador durante um período
                    específico.
                  </p>
                  <p>
                    <strong>Nr. de Horas Extras:</strong> Produz relatórios que
                    mostram o número de horas extras trabalhadas por cada
                    colaborador, juntamente com informações relevantes.
                  </p>
                </div>
              </div>
            </>
          }
          func="Processo Individual, Recrutamento, Requisição Interna de RH, Formulário de Job Description, Candidaturas, Formulários de Entrevista, Processamento de Salários, Mapa de Salários, Mapas, Extracto de Salários, Relatórios"
        />

        <PrimulaCard
          icon={logo3}
          textColor="white"
          borderColor="primula-100"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO CONTABILIDADE"
          description="Software de contabilidade, permite que as empresas façam a gestão das suas
          finanças, cumprir com as obrigações fiscais e manter um controle rigoroso de suas operações
          contábeis."
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Plano Geral de Contas</h3>
                  <p>
                    <strong>Estrutura Contabilística:</strong> Permite definir e
                    organizar a estrutura contábil da empresa, incluindo contas
                    de ativos, passivos, despesas, receitas, etc.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    2. Operações de Contabilidade (Automatizado)
                  </h3>
                  <p>
                    <strong>Registos Automatizados:</strong> Automatiza o
                    processo de entrada de dados contábeis, como transações
                    comerciais, vendas, compras e pagamento de contas.
                  </p>
                  <p>
                    <strong>Revisão e Edição:</strong> Oferece a capacidade de
                    revisar, editar e remover movimentos contábeis e documentos
                    antes de serem registrados oficialmente.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">
                    2.1 Operações de Contabilidade (Manual)
                  </h3>
                  <p>
                    <strong>Registo de Lançamentos:</strong> Permite o registo
                    de lançamentos contábeis, com a capacidade de editar,
                    cancelar ou remover lançamentos conforme necessário.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">3. Mapas Gerais</h3>
                  <p>
                    <strong>Visão Geral de Dados Contábeis:</strong> Fornece uma
                    visão geral dos dados contábeis, incluindo resumos de contas
                    e movimentos.
                  </p>
                  <p>
                    <strong>Balanço de Contas:</strong> Gera balancetes
                    contábeis que mostram o saldo atual de todas as contas em um
                    determinado período.
                  </p>
                  <p>
                    <strong>Razão Contábil:</strong> Gera um razão contábil que
                    exibe todas as transações e movimentos associados a uma
                    conta específica.
                  </p>
                  <p>
                    <strong>Relatório Analítico:</strong> Apresenta análises
                    detalhadas de contas contábeis, destacando transações
                    individuais.
                  </p>
                  <p>
                    <strong>Resumos de Contas:</strong> Fornece extratos
                    detalhados de contas específicas, mostrando todas as
                    transações relacionadas.
                  </p>
                </div>
                <div className="py-4 bg-white ">
                  <h3 className="font-semibold text-lg mb-4">
                    4. Fiscalidade (Documentos da AT)
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-blue-700">
                        Conformidade Fiscal:
                      </strong>{" "}
                      Integra documentos fiscais, como declarações e guias de
                      pagamento, para garantir a conformidade com as autoridades
                      fiscais.
                    </p>
                    <p>
                      <strong className="text-blue-700">
                        Modelo A – Declaração Periódica para IVA
                      </strong>
                      <br />
                      <strong>Relatório de IVA:</strong> Gera a declaração
                      periódica de Imposto sobre o Valor Acrescentado (IVA)
                      conforme exigido pelas autoridades fiscais.
                    </p>
                    <p>
                      <strong className="text-blue-700">
                        Modelo 19 – Guia de Pagamento para IRPS
                      </strong>
                      <br />
                      <strong>Guia de Pagamento de IRPS:</strong> Cria guias de
                      pagamento para Imposto sobre o Rendimento de Pessoas
                      Singulares (IRPS).
                    </p>
                    <p>
                      <strong className="text-blue-700">
                        Modelo 20 – Declaração Anual de Informação
                        Contabilística e Fiscal
                      </strong>
                      <br />
                      <strong>Relatório Anual:</strong> Produz a declaração
                      anual de informações contábeis e fiscais para apresentação
                      às autoridades.
                    </p>
                    <p>
                      <strong className="text-blue-700">
                        Modelo 22 – Declaração de Rendimentos IRPC
                      </strong>
                      <br />
                      <strong>Declaração de Rendimentos:</strong> Gera a
                      declaração de rendimentos para Imposto sobre o Rendimento
                      das Pessoas Coletivas (IRPC).
                    </p>
                    <p>
                      <strong className="text-blue-700">
                        Modelo 39 - Guia de Pagamento para IRPC
                      </strong>
                      <br />
                      <strong>Guia de Pagamento de IRPC:</strong> Cria guias de
                      pagamento para Imposto sobre o Rendimento das Pessoas
                      Coletivas (IRPC).
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
          func="Plano Geral de Contas, Operações de Contabilidade, Mapas Gerais, Balancetes, Razão Contábil, Relatório Analítico, Extractos de Contas, Diário de Movimentos, Balanço Patrimonial, Mapa de Demonstrações de Resultados, Fiscalidade"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO POS"
          description="Gestão eficiente de um ponto de venda, permite rastrear todas as transações,
          manter registos precisos e oferecer aos clientes informações claras e organizadas sobre suas
          compras."
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Recibos</h3>
                  <p>
                    <strong>Geração de Recibos:</strong> Esta funcionalidade
                    permite que o software de POS gere recibos de vendas
                    automaticamente após cada transação. Os recibos podem ser
                    impressos em uma impressora de recibos térmica ou enviados
                    por email para os clientes, dependendo das preferências.
                  </p>
                  <p>
                    <strong>Personalização de Recibos:</strong> Os recibos podem
                    ser personalizados com o logotipo da empresa, informações de
                    contato, políticas de devolução e agradecimentos aos
                    clientes. Isso cria uma identidade de marca consistente e
                    fornece informações importantes aos clientes.
                  </p>
                  <p>
                    <strong>Registo de Detalhes da Transação:</strong> Os
                    recibos incluem detalhes da transação, como data, hora,
                    número da venda, itens comprados, preços individuais e
                    totais, impostos aplicáveis e métodos de pagamento. Isso
                    fornece uma visão clara das compras para os clientes.
                  </p>
                  <p>
                    <strong>Opções de Pagamento:</strong> Os recibos indicam
                    claramente o método de pagamento usado na transação, seja em
                    dinheiro, cartão de crédito, débito ou outras formas de
                    pagamento aceitas.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">2. Extracto de Vendas</h3>
                  <p>
                    <strong>Resumo de Vendas:</strong> O Extracto de Vendas
                    oferece um resumo abrangente das transações de vendas
                    realizadas durante um período específico, geralmente com
                    opções de filtro por data, turno ou vendedor.
                  </p>
                  <p>
                    <strong>Análise de Vendas:</strong> Ele fornece informações
                    essenciais sobre o desempenho de vendas, incluindo o total
                    de vendas brutas, vendas líquidas (após descontos e
                    devoluções), impostos arrecadados e margens de lucro.
                  </p>
                  <p>
                    <strong>Histórico de Transações:</strong> Os detalhes de
                    cada transação, como número de venda, itens vendidos,
                    preços, quantidades e métodos de pagamento, são registados e
                    podem ser acessados para fins de auditoria ou referência
                    futura.
                  </p>
                  <p>
                    <strong>Relatórios Detalhados:</strong> O software de POS
                    geralmente permite a geração de relatórios detalhados a
                    partir do Extracto de Vendas, incluindo análises de
                    tendências, comparações entre produtos e vendedores, e
                    informações sobre o desempenho da loja.
                  </p>
                </div>
              </div>
            </>
          }
          func="Recibos, Registo de Detalhes da Transação, Extracto de Vendas, Resumo de Vendas, Análise de Vendas, Histórico de Transações, Relatórios, Gestão de Pagamentos"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO COMPRAS"
          description="Controle mais eficaz sobre o processo de compras, desde a seleção de
          fornecedores até o acompanhamento do inventário e das finanças."
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Mercadorias</h3>
                  <p>
                    Esta funcionalidade permite que você registe e acompanhe as
                    mercadorias disponíveis em seu estoque.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">2. Inventário</h3>
                  <p>
                    O módulo de inventário permite que você mantenha o controle
                    atualizado de todos os itens em estoque.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">3. Fornecedores</h3>
                  <p>
                    Esta funcionalidade permite que você mantenha um registo
                    detalhado de todos os seus fornecedores. Isso inclui
                    informações de contato, detalhes da empresa e histórico de
                    transações anteriores, facilitando a gestão de
                    relacionamentos com fornecedores.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">4. Bens e Serviços</h3>
                  <p>
                    Aqui, você pode categorizar e listar todos os bens e
                    serviços que sua empresa adquire. Isso ajuda a organizar seu
                    catálogo de compras e facilita a seleção de itens durante o
                    processo de compra.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">5. Extracto de Fornecedores</h3>
                  <p>
                    Esta funcionalidade oferece uma visão consolidada das
                    transações e pagamentos feitos a cada fornecedor ao longo do
                    tempo. Isso ajuda a monitorar o histórico financeiro com
                    cada fornecedor.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">6. Relatórios</h3>
                  <p>
                    O módulo de relatórios fornece análises detalhadas de suas
                    compras, permitindo que você avalie desempenho, custos,
                    tendências e eficiência. Os relatórios podem ser
                    personalizados para atender às necessidades específicas de
                    sua empresa.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">7. Compras</h3>
                  <p>
                    Essa é a parte central do software, onde você pode criar,
                    revisar e aprovar pedidos de compra. Ele inclui recursos
                    para gerar cotações, comparar fornecedores, definir prazos
                    de entrega e realizar pedidos.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">8. Compras a prazo</h3>
                  <p>
                    Este recurso permite que você faça gestão das compras que
                    envolvem pagamento em parcelas ou em um prazo estendido.
                    Você pode configurar termos de pagamento, datas de
                    vencimento e acompanhar os pagamentos.
                  </p>
                </div>
              </div>
            </>
          }
          func="Mercadorias, Inventário, Fornecedores, Bens e Serviços, Extracto de Fornecedores, Relatórios, Compras, Compras a Prazo"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO COMERCIAL"
          description="Gestão comercial eficaz, permite a realização de vendas, o registo de transações
          comerciais, o acompanhamento de clientes e a geração de informações valiosas por meio de
          relatórios e análises."
          dtdescription={
            <>
              <div className="divide-y divide-gray-300">
                <div className="py-4">
                  <h3 className="font-semibold">1. Vendas</h3>
                  <p>
                    <strong>Registo de Transações:</strong> A funcionalidade de
                    Vendas permite que os usuários registem todas as transações
                    de venda de produtos ou serviços. Isso inclui a seleção de
                    itens, cálculo de preços, aplicação de descontos e escolha
                    de métodos de pagamento.
                  </p>
                  <p>
                    <strong>Gestão de Carrinho:</strong> Os itens selecionados
                    são geralmente adicionados a um carrinho de compras virtual,
                    onde os usuários podem revisar e ajustar as quantidades e
                    produtos antes de finalizar a venda.
                  </p>
                  <p>
                    <strong>Processamento de Pedidos:</strong> As vendas podem
                    ser processadas como pedidos imediatos ou como pedidos
                    pendentes para entrega posterior.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">2. Recibo</h3>
                  <p>
                    <strong>Emissão de Recibos:</strong> A funcionalidade de
                    Recibo permite a geração automática de recibos para os
                    clientes após a conclusão bem-sucedida de uma venda. Os
                    recibos detalham informações sobre a transação, incluindo
                    data, hora, itens comprados, preços, impostos e informações
                    de contato da empresa.
                  </p>
                  <p>
                    <strong>Personalização de Recibos:</strong> Os recibos podem
                    ser personalizados com o logotipo da empresa e outras
                    informações relevantes, criando uma identidade de marca
                    consistente.
                  </p>
                  <p>
                    <strong>VD (Venda Direta):</strong> Vendas Sem Carrinho: A
                    funcionalidade de Venda Direta permite que os usuários
                    adicionem itens diretamente ao pedido sem a necessidade de
                    um carrinho de compras. Isso é útil para transações rápidas
                    ou quando apenas um ou dois itens estão envolvidos.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">3. Factura</h3>
                  <p>
                    <strong>Emissão de Faturas:</strong> A funcionalidade de
                    Factura permite que os usuários emitam faturas detalhadas
                    para clientes ou empresas. As faturas geralmente incluem
                    informações sobre a venda, termos de pagamento e detalhes de
                    contato.
                  </p>
                  <p>
                    <strong>Gestão de Pagamentos:</strong> As faturas podem
                    incluir informações sobre pagamentos pendentes e datas de
                    vencimento, facilitando o acompanhamento do status de
                    pagamento.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">4. Extracto de Clientes</h3>
                  <p>
                    <strong>Resumo das Transações:</strong> A funcionalidade de
                    Extracto de Clientes oferece um resumo das transações de um
                    cliente específico ao longo do tempo. Isso inclui todas as
                    compras, pagamentos, faturas e saldos pendentes.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">5. Relatórios</h3>
                  <p>
                    <strong>Análise de Dados:</strong> Os Relatórios permitem a
                    geração de análises e informações detalhadas sobre as
                    vendas, estoque, desempenho financeiro e outras métricas de
                    negócios. Isso auxilia na tomada de decisões informadas.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-semibold">6. Contas Correntes</h3>
                  <p>
                    <strong>Registo de Transações Financeiras:</strong> A
                    funcionalidade de Contas Correntes permite registar todas as
                    transações financeiras relacionadas a clientes, incluindo
                    vendas, pagamentos e saldos pendentes.
                  </p>
                  <p>
                    <strong>Contas a Prazo:</strong> Gestão de Crédito: A
                    funcionalidade de Contas a Prazo permite que os usuários
                    estabeleçam termos de pagamento a prazo para clientes que
                    têm a opção de pagar por produtos ou serviços após um
                    determinado período. Isso é útil para clientes comerciais
                    que exigem crédito.
                  </p>
                </div>
              </div>
            </>
          }
          func="Vendas, Registo de Transações, Recibo, VD (Venda Direta), Factura, Extracto de Clientes, Relatórios, Contas Correntes, Contas a Prazo"
        />
      </div>
    </section>
  );
};

export default GuidePrimula;

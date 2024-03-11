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
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
          dtdescription="O módulo Finanças oferece uma ampla gama de funcionalidades para gestão financeira, incluindo gestão de requisições, ordens de pagamento, análise de fluxo de caixa, simulações financeiras, e muito mais."
          func="Gestão de Requisições, Ordens de Pagamento/Tesouraria, Mapas, Extracto de Bancos, Extracto de Caixa, Demonstrações de Fluxo de Caixa, Simulações, Empréstimos, Relatórios"
        />

        <PrimulaCard
          icon={logo2}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO RECURSOS HUMANOS"
          description="Além de gestão de Recursos Humanos eficaz, permite a gestão de informações dos colaboradores, o processamento de salários e a optimização de processos de recrutamento e seleção."
          dtdescription="O módulo Recursos Humanos oferece ferramentas para gestão de perfis de colaboradores, recrutamento, processamento de salários, e gestão de requisitos de recrutamento."
          func="Processo Individual, Recrutamento, Requisição Interna de RH, Formulário de Job Description, Candidaturas, Formulários de Entrevista, Processamento de Salários, Mapa de Salários, Mapas, Extracto de Salários, Relatórios"
        />

        <PrimulaCard
          icon={logo3}
          textColor="white"
          borderColor="primula-100"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO CONTABILIDADE"
          description="Permite que as empresas façam a gestão das suas finanças, cumprir com as obrigações fiscais e manter um controle rigoroso de suas operações contábeis."
          dtdescription="O módulo Contabilidade oferece recursos para gestão do plano geral de contas, operações de contabilidade automatizadas ou manuais, balancetes, razão contábil, extractos de contas, e conformidade fiscal."
          func="Plano Geral de Contas, Operações de Contabilidade, Mapas Gerais, Balancetes, Razão Contábil, Relatório Analítico, Extractos de Contas, Diário de Movimentos, Balanço Patrimonial, Mapa de Demonstrações de Resultados, Fiscalidade"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO POS"
          description="Permite rastrear todas as transações, manter registos precisos e oferecer aos clientes informações claras e organizadas sobre suas compras."
          dtdescription="O módulo POS oferece funcionalidades para geração de recibos, personalização de recibos, registo de detalhes de transação, resumo de vendas, análise de vendas, histórico de transações, e gestão de pagamentos."
          func="Recibos, Registo de Detalhes da Transação, Extracto de Vendas, Resumo de Vendas, Análise de Vendas, Histórico de Transações, Relatórios, Gestão de Pagamentos"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="purple-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO COMPRAS"
          description="Controle mais eficaz sobre o processo de compras, desde a seleção de fornecedores até o acompanhamento do inventário e das finanças."
          dtdescription="O módulo Compras oferece funcionalidades para gestão de mercadorias, inventário, fornecedores, bens e serviços, extracto de fornecedores, relatórios, compras, e compras a prazo."
          func="Mercadorias, Inventário, Fornecedores, Bens e Serviços, Extracto de Fornecedores, Relatórios, Compras, Compras a Prazo"
        />

        <PrimulaCard
          icon={logo4}
          textColor="white"
          borderColor="primary-300"
          bgColor="transparent"
          title="PRÍMULA"
          subtitle="MÓDULO COMERCIAL"
          description="Permite rastrear todas as transações, manter registos precisos e oferecer aos clientes informações claras e organizadas sobre suas compras."
          dtdescription="O módulo Comercial oferece funcionalidades para gestão de vendas, registo de transações comerciais, gestão de pagamentos, extracto de clientes, e análise de dados."
          func="Vendas, Registo de Transações, Recibo, VD (Venda Direta), Factura, Extracto de Clientes, Relatórios, Contas Correntes, Contas a Prazo"
        />
      </div>
    </section>
  );
};

export default GuidePrimula;

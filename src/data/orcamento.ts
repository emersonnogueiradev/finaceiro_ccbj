import { ItemOrcamentario } from "@/types/ItemOrcamentario";


// Identifica o painel atual: um financiamento em um período específico.
export const painelOrcamento = {
  id: "orcamento-ano-2",
  financiamento: "Contrato de Gestão 005/2025 (CCBJ 25/27)",
  periodo: "Ano 2",
};

export const orcamento: ItemOrcamentario[] = [
  {
    id: "orc-001",
    periodo: "Ano 2",
    financiamento: "Contrato de Gestão 005/2025 (CCBJ 25/27)",
    meta: "META 1",
    atividade: "atividade 1.1",
    descricao: "BOLSA AUXILIO",
    setor: "AÇÃO CULTURAL",
    previstoCentavos: 17960000,
    contratadoCentavos: 940000,
    pagoCentavos: 940000,
  },
  {
  id: "orc-002",
  periodo: "Ano 2",
  financiamento: "Contrato de Gestão 005/2025 (CCBJ 25/27)",
  meta: "META 3",
  atividade: "atividade 3.1",
  descricao: "BOLSA AUXILIO",
  setor: "ESCOLA",
  previstoCentavos: 75360000,
  contratadoCentavos: 47140000,
  pagoCentavos: 23410000,
},
];
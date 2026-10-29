'use client'
import FiltroSelecao from "@/components/FiltroSelecao";
import FiltroSetor from "@/components/FiltroSetor";
import TabelaOrcamento from "@/components/TabelaOrcamentos";
import { orcamento, painelOrcamento } from "@/data/orcamento";
import { useState } from "react";
import { formatarMoeda } from "@/lib/formatar-moeda";
export default function Home() {


    const itensDoPainel = orcamento.filter((item) => {
      return item.financiamento === painelOrcamento.financiamento
        && item.periodo === painelOrcamento.periodo;
    });
    const setores = [...new Set(itensDoPainel.map((item) => item.setor))];
    const descricoes = [...new Set(itensDoPainel.map((item) => item.descricao))];

    const [setorSelecionado, setSetorSelecionado] = useState("");
    const [itemSelecionado, setItemSelecionado] = useState("");

    const itensFiltrados = itensDoPainel.filter((item) => {
      const correspondeSetor = setorSelecionado === "" || item.setor === setorSelecionado;
      const correspondeItem = itemSelecionado === "" || item.descricao === itemSelecionado;
      return correspondeSetor && correspondeItem;
    });

    const totalPrevisto = itensFiltrados.reduce((total, item) => {
      return total + item.previstoCentavos;
    }, 0);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Painel de custeio</h1>
      <p className="mt-3 text-sm text-zinc-400">
        {painelOrcamento.financiamento} — {painelOrcamento.periodo}
      </p>
      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 lg:flex-row lg:items-end lg:justify-between">
        <FiltroSetor setores={setores} valor={setorSelecionado} aoSelecionar={setSetorSelecionado}/>
        <FiltroSelecao
          titulo="Item de custeio"
          opcaoTodos="Todos os itens"
          opcoes={descricoes}
          valor={itemSelecionado}
          aoSelecionar={setItemSelecionado}
        />
        <p className="shrink-0 text-sm text-zinc-400">
          Total previsto da seleção
          <span className="mt-1 block text-2xl font-semibold tracking-tight text-zinc-50 tabular-nums">
            {formatarMoeda(totalPrevisto)}
          </span>
        </p>

      </div>
      <TabelaOrcamento itens={itensFiltrados}/>
  </main>
  );
}




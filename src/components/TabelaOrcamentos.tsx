import { ItemOrcamentario } from "@/types/ItemOrcamentario"
import { formatarMoeda } from "@/lib/formatar-moeda";

interface TabelaOrcamentoProps {

    itens: ItemOrcamentario[]
}

export default function TabelaOrcamento(props: TabelaOrcamentoProps){

    const {itens } = props
    return(
     <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/50">
     <table className="w-full text-left text-sm">
        <thead className="bg-zinc-800/70 text-zinc-300">
          <tr>
            <th className="px-4 py-3">Item de custeio</th>
            <th className="px-4 py-3">Setor</th>
            <th className="px-4 py-3 text-right">Previsto</th>
            <th className="px-4 py-3 text-right">Contratado</th>
            <th className="px-4 py-3 text-right">Pago</th>
            <th className="px-4 py-3 text-right">Saldo</th>
          </tr>
        </thead>

        <tbody>
          {itens.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-zinc-400">
                Nenhum item encontrado para os filtros selecionados.
              </td>
            </tr>
          )}
          {
          itens.map( (item) => {
            return (

            <tr key={item.id} className="border-t border-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-800/50">
            <td className="min-w-52 px-4 py-4 font-medium text-zinc-100">{item.descricao}</td>
            <td className="whitespace-nowrap px-4 py-4 text-xs text-zinc-400">{item.setor}</td> 
            <td className="whitespace-nowrap px-4 py-4 text-right tabular-nums">{formatarMoeda(item.previstoCentavos)}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right tabular-nums">{formatarMoeda(item.contratadoCentavos)}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right tabular-nums">{formatarMoeda(item.pagoCentavos)}</td>
            <td  className="whitespace-nowrap px-4 py-4 text-right tabular-nums">{formatarMoeda(item.previstoCentavos-item.contratadoCentavos)}</td>
            </tr>

            )
          }

          )
          
          
          
          
          }
        </tbody>
      </table>
      </div>    
    )
}


 
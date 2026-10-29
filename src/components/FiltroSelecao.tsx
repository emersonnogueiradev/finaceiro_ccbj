interface FiltroSelecaoProps {
  titulo: string;
  opcaoTodos: string;
  opcoes: string[];
  valor: string;
  aoSelecionar: (valor: string) => void;
}

export default function FiltroSelecao(props: FiltroSelecaoProps) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="mb-2 block text-sm font-medium text-zinc-300">
        {props.titulo}
      </span>
      <select
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
        value={props.valor}
        onChange={(event) => props.aoSelecionar(event.target.value)}
      >
        <option value="">{props.opcaoTodos}</option>
        {props.opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>{opcao}</option>
        ))}
      </select>
    </label>
  );
}

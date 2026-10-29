import FiltroSelecao from "./FiltroSelecao";

interface FiltroSetorProps {
  setores: string[];
  valor: string;
  aoSelecionar: (setor: string) => void;
}

export default function FiltroSetor(props: FiltroSetorProps) {
  return (
    <FiltroSelecao
      titulo="Setor"
      opcaoTodos="Todos os setores"
      opcoes={props.setores}
      valor={props.valor}
      aoSelecionar={props.aoSelecionar}
    />
  );
}

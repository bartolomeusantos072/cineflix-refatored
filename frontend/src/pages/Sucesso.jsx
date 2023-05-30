import Title from "../components/Title";
import { useLocation, useNavigate } from "react-router-dom";
import useTickets from "../hooks/api/useTickets";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Sucesso() {
  const { postTicket, postTicketError } = useTickets();
  const location = useLocation();
  const navigate = useNavigate();
  const dados = location.state && location.state.dados;
  const { session, selectedSeat, nome, cpf } = dados;
  const [ titulo, setTitulo] = useState("Verificação de informações");
  const [ cor, setCor] = useState("vermelho");
  const [situacao,setSituacao]=useState(false);
  const goBack = () => {
    navigate(-1);
  };
  
  const handleReservarClick = async () => {
    try {
      await postTicket({ ids: selectedSeat, name: nome, cpf });
       setTitulo("Confirmacao de Pedido");
       setSituacao(true);
       setCor("verde");
      // Lógica adicional após o sucesso do postTicket, se necessário
    } catch (error) {
      postTicketError();
      // Lógica adicional para lidar com erros, se necessário
    }
  };


  return (
    <>
      <main>
        <Title cor={cor} subTitle={titulo} />
        <section className="verificacao">
          <div>
            <h3>Filme e sessão</h3>
            <p>{session.movie.title}</p>
            <p>
              {session.day.date}
              {session.name}
            </p>
          </div>
          <div>
            <h3>Ingressos</h3>
            <ul>
              {session.seats
                .filter((seat) => selectedSeat.includes(seat.id))
                .map((seat) => {
                  return (
                    <li key={seat.id}>
                      <p>Assento: {seat.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h3>Comprador</h3>
            <p>{nome}</p>
            <p>{cpf}</p>
          </div>
          <aside>
            <button className={situacao} onClick={goBack} disabled={situacao}>Cancelar</button>

            <button onClick={handleReservarClick}>Reservar Assento(s)</button>
          </aside>
        </section>
      </main>
    </>
  );
}


import Seat from "./Seat";

// eslint-disable-next-line react/prop-types
export default function Seats({ seats, selectedSeat, setSelectedSeat }) {
 
  return (
    <div className="painel">
      <div className="assentos">
        {
          // eslint-disable-next-line react/prop-types
          seats.map((seat) => {
            return (
              <Seat
                key={seat.id}
                seat={seat}
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
              />
            );
          })
        }
      </div>
      <div className="legenda">
        <figure>
          <div className="assento selecionado"></div>
          <figcaption>Selecionado</figcaption>
        </figure>
        <figure>
          <div className="assento disponivel"></div>
          <figcaption>Disponível</figcaption>
        </figure>
        <figure>
          <div className="assento indisponivel"></div>
          <figcaption>Indisponível</figcaption>
        </figure>
      </div>
    </div>
  );
}

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Seat({ seat, selectedSeat,setSelectedSeat }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, isAvailable } = seat;
  const [selected, setSelected] = useState(false);
  

  function handleClick(id) {
    // eslint-disable-next-line react/prop-types
    selectedSeat.includes(id) ? setSelectedSeat((ids)=> ids.filter((ids)=>ids!=id)): setSelectedSeat((ids)=>[...ids, id]);
    (isAvailable==true) ? setSelected(!selected): alert("Assento não disponível");
}

  return (
    <>
      <div
        className={`
        assento 
        ${isAvailable ? "disponivel" : "indisponivel"} 
        ${selected ? "selecionado" : ""}`}
        onClick={() => handleClick(id)}
      >
        <p>{name}</p>
      </div>
    </>
  );
}

import { useState } from "react";
import CpfValidation from "./CpfValidation";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Form({selectedSeat, session}) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const dados = { session, selectedSeat, nome, cpf };
      navigate("/sucesso", { state: { dados } });
    } catch(error) {
      
      setNome("");
      setCpf("");

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome do Comprador:</label>
      <input
        type="text"
        value={nome}
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label>CPF do Comprador:</label>
      <CpfValidation cpf={cpf} onChange={(value) => setCpf(value)} />

      <button type="submit" value="Submit">
        <h3>Reservar Assento(s)</h3>
      </button>
    </form>
  );
}

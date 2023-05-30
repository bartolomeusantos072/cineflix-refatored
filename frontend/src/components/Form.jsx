import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Form({selectedSeat, session}) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleCpfChange = (event) => {
    const { value } = event.target;
    setCpf(value);

    const cleanedCpf = value.replace(/\D/g, '');
    const isValidFormat = cleanedCpf.length === 11;
    const isValidCpf = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/.test(cleanedCpf);

    setIsValid(isValidFormat && isValidCpf);
  };
  
  function handleSubmit(e) {
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

      <label>CPF do Comprador {isValid &&   'válido' }: </label>
     
      <input type="text" value={cpf} onChange={handleCpfChange} placeholder="Digite seu cpf"
      data-mask="000.000.000-00" required/>

      <button type="submit" value="Submit">
        <h3>Reservar Assento(s)</h3>
      </button>
    </form>
  );
}

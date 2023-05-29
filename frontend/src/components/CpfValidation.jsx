import { useState } from 'react';

const CpfValidation = () => {
  const [cpf, setCpf] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleCpfChange = (event) => {
    const { value } = event.target;
    setCpf(value);

    // Remove all non-digit characters from the input
    const cleanedCpf = value.replace(/\D/g, '');

    // Check if the cleaned CPF has 11 digits
    const isValidFormat = cleanedCpf.length === 11;

    // Validate CPF using a regular expression
    const isValidCpf = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/.test(cleanedCpf);

    setIsValid(isValidFormat && isValidCpf);
  };

  return (
    <div>
      <input type="text" value={cpf} onChange={handleCpfChange} placeholder="Digite seu cpf"
      data-mask="000.000.000-00" />
      {isValid &&  <span>CPF válido</span> }
    </div>
  );
};

export default CpfValidation;

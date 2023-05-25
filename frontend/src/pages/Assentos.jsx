import { useParams } from "react-router-dom";
import useChairs from "../hooks/api/useChairs";
import { useEffect } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Assentos() {
  const { idAssento } = useParams();
  const { chairs, chairsLoading, chairsError, getChairs } =
    useChairs(idAssento);

  useEffect(() => {
    getChairs;
  }, []);

  if (chairsLoading) <p>Loading...</p>;

  if (chairsError) <p>{chairsError.message}</p>;
  console.log(chairs);
  if (chairs) {
    return (
      <>
        <main>
          <Title subTitle={`Selecion o(s) assentos`} />
          <section className="assentos">
            <div>
            {JSON.stringify(chairs)};
            </div>
            <form>
              <label>Nome do Comprador:</label>

              <input
                type="text"
                value=""
                placeholder="Digite seu nome"
                onChange=""
              />

              <label>CPF do Comprador:</label>

              <input
                type="text"
                value=""
                placeholder="Digite seu CPF"
                onChange=""
              />
              <button type="submit" value="Submit">
                <h3>Reservar Assento(s)</h3>
              </button>
            </form>
          </section>
        </main>
        <Footer
          situation="footer-session"
          sessao={`${chairs.day.weekday} - ${chairs.name}`}
          dados={chairs.movie}
        />
      </>
    );
  }
  return null;
}

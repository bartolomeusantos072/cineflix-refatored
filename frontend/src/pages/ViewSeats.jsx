import { useParams } from "react-router-dom";
import useSession from "../hooks/api/useSession";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Seats from "../components/Seats";
import Form from "../components/Form.jsx";


export default function ViewSeats() {
  const { idAssento } = useParams();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const { session, sessionLoading, sessionError, getSession } =
    useSession(idAssento);
  

  useEffect(() => {
    getSession;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (sessionLoading) <p>Loading...</p>;

  if (sessionError) <p>{sessionError.message}</p>;
  console.log(session);
  if (session) {
    return (
      <>
        <main>
          <Title subTitle={`Selecione o(s) assentos`} />
          <section className="seats">
            
              {/* {JSON.stringify(session)} */}
            <Seats seats={session.seats} selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}/>
            
           <Form selectedSeat={selectedSeat} session={session} />
          </section>
        </main>
        <Footer
          situation="footer-session"
          sessao={`${session.day.weekday} - ${session.name}`}
          dados={session.movie}
        />
      </>
    );
  }
  return null;
}

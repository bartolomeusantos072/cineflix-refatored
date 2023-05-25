import { useEffect } from "react";
import useSessions from "../hooks/api/useSessions";
import { useParams } from "react-router-dom";  
import Title from "../components/Title";
import Footer from "../components/Footer";
import Session from "../components/Session";

export default function Sessoes() {
    const { id } = useParams();  
    const { sessions, sessionsLoading, sessionsError, getSessions } = useSessions(id);

  useEffect(() => {
     getSessions;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (sessionsLoading) {
    return <p>Loading</p>;
  }
  
  if (sessionsError) {
    return <p>An error occurred: {sessionsError.message}</p>;
  }
  

  if (sessions) {
    return (
      <>
        <main>
          <Title subTitle="Selecione o horario" />
          <section className="sessions">
            {sessions.days.map((day) => {
            
              return (
                <Session key={day.id} session={day}/> 
              );
            })}
          </section>
        </main>
        <Footer situation="footer-session" dados={sessions} />
      </>
    );
  }

  return null;
}

import Title from "../components/Title";

export default function VerifyPedido({session, selectedSeat,nome,cpf}){
    
    // const {postTicket, postTicketError} = useTickets();  
    
   return <>
        <main>
          <Title subTitle="Verificação de informações" />
          <section className="verificacao">
             <h2>Filme e sessão</h2>
             {JSON.stringify(session)}
             <h2>Ingressos</h2>
             {JSON.stringify(selectedSeat)}
             <h2>Comprador</h2>
             {nome}<br/>
             {cpf}   
          </section>
        </main>
        
      </>
    


}

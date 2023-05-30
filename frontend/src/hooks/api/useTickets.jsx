import useAsync from '../useAsync';
import { postTickets } from '../../services/ticketApi';

export default function useTickets() {
  const {
    loading: postTicketLoading,
    error: postTicketError,
    act: postTicket
  } = useAsync((tickets)=>postTickets(tickets), false);

  return {
    postTicketLoading,
    postTicketError,
    postTicket
  };
}
import api from './api';

export async function postTickets(tickets){
    const response = await api.post(`/seats/book-many`, tickets)
    return response.data;
}
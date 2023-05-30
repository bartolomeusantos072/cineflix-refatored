import api from './api';

export async function postTickets(body){
    const response = await api.post(`/seats/book-many`, body)
    return response.data;
}
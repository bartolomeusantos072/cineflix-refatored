import api from './api';

export async function getSessionsInfo(movieId){
    const response = await api.get(`/movies/${movieId}/showtimes`)
    return response.data;
}
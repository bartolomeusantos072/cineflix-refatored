import api from  './api';

export async function getMoviesInfo(){
    const response = await api.get(`/movies`)
    return response.data;
}
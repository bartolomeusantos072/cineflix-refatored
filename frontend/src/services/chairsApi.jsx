import api from  './api';

export async function getChairsInfo(sessionId){
    const response = await api.get(`/showtimes/${sessionId}/seats`);
    return response.data;
}



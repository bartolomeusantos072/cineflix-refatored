import api from  './api';

export async function getSessionInfo(sessionId){
    const response = await api.get(`/showtimes/${sessionId}/seats`);

    return response.data;
}



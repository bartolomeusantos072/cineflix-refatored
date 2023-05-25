import useAsync from '../useAsync.jsx';

import * as sessionsApi from "../../services/sessionsApi.jsx";

export default function useSessions(id){
    
    const {
        data: sessions,
        loading: sessionsLoading,
        error: sessionsError,
        act: getSessions
    } = useAsync(() => sessionsApi.getSessionsInfo(id));

    return  {
        sessions, sessionsLoading, sessionsError, getSessions
    }
}
import useAsync from "../useAsync";
import * as sessionApi from "../../services/sessionApi.jsx";

export default function useSession(id){
    const {
        data: session,
        loading: sessionLoading,
        error: sessionError,
        act: getSession
    }  = useAsync(()=> sessionApi.getSessionInfo(id));
    return {session, sessionLoading, sessionError, getSession }
}
import useAsync from "../useAsync";
import * as chairsApi from "../../services/chairsApi.jsx";

export default function useChairs(id){
    const {
        data: chairs,
        loading: chairsLoading,
        error: chairsError,
        act: getChairs
    }  = useAsync(()=> chairsApi.getChairsInfo(id));
    return {chairs, chairsLoading, chairsError, getChairs }
}
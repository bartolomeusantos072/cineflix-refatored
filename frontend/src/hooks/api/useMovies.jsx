import useAsync from '../useAsync.jsx';

import * as moviesApi from "../../services/moviesApi.jsx";

export default function useMovies(){
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        act: getMovies
    } = useAsync(() => moviesApi.getMoviesInfo());

    return  {
        movies, moviesLoading, moviesError, getMovies
    }
}
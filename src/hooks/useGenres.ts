import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    // use state for loading skelingtons
    const [isLoading, setLoading] = useState(false)
    // use effect to fetch the data from api
  
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal})
        // using axios to get the data properites to access the body
        .then((res) => {
          setGenres(res.data.results);
        setLoading(false)})
        .catch((err) => {
          // only displays the cancelled message if cancelled
          if (err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { genres, error, isLoading };
};

export default useGenres;

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


//defining the interface that represents the shape of the game data from the api

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
}
// represents the platform objects
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// defining the interface that represents the shape of the object from the api

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  // use effect to fetch the data from api


  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal})
      // using axios to get the data properites to access the body
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // only displays the cancelled message if cancelled
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;

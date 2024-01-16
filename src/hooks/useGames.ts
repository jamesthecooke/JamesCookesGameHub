import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

//defining the interface that represents the shape of the game data from the api

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// represents the platform objects
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;

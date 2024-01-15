import useData from "./useData";


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

const useGames = () => useData<Game>('/games');

export default useGames;

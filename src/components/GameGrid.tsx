import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
//  this code is responsible for returning the mark up - it gets the required information from - useGames
export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {/* will display a error only if a error occurs */}
      {error && <Text>{error}</Text>}
      {/* simple grid from chakra */}
      {/* tells us how many columns should be shown for the device size */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10} >
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

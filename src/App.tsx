import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    // this grid is styled within charkra - template areas decides how it will be displayed for different screen sizes - The show tag will only show when it is over 1024 (lg)
    <Grid
      templateAreas={{
        base: `" nav " "main"`,
        lg: `" nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} >
          <GenreList selectedGenre={GameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...GameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={GameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...GameQuery, platform })}/>
          </Box>
        <SortSelector sortOrder={GameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...GameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={GameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;

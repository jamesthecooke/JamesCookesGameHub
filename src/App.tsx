import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    // this grid is styled within charkra - template areas decides how it will be displayed for different screen sizes - The show tag will only show when it is over 1024 (lg)
    <Grid
      templateAreas={{
        base: `" nav main"`,
        lg: `" nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

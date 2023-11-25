import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
//  this code is responsible for returning the mark up - it gets the required information from - useGames
export const GameGrid = () => {
    const {games, error} = useGames();
  return (
    <>
    {/* will display a error only if a error occurs */}
        {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>

  )
}

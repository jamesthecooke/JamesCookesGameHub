import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import apiClient from '../services/api-client';

// importing the necessary info for the fetch

//defining the interface that represents the shape of the game data from the api

interface Game {
    id: number;
    name: string;
}

// defining the interface that represents the shape of the object from the api

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

export const GameGrid = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
// use effect to fetch the data from api
    useEffect(()=> {
        apiClient.get<FetchGamesResponse>('/games')
        // using axios to get the data properites to access the body
          .then(res => setGames(res.data.results))
          .catch(err => setError(err.message));
    })

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

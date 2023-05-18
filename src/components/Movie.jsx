import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Movie = ({movieName}) => {
  const [error, setError] = useState('')
  const [movie, setMovie] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const apiKey = 'YOUR_API_KEY'

  useEffect(() => {
    if(movieName==='') {
      return
    }
    const fetchMovie = async () => {
      setError('')
      try {
        setIsLoading(true)
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
        if(response.data.Error) {
          setError(response.data.Error)
          setIsLoading(false)
          return
        }
        setMovie(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setError('Something went wrong')
      }
    }
    fetchMovie()
  }, [movieName])
  

  return (
    <div className='MoviePage fade-in'>
      {isLoading && <Box sx={{ display: 'flex', alignItems:'center',justifyContent:'center' }}>
        <CircularProgress />
      </Box>}
      {movie ? <div className='fade-in'>
          <div>
            <h1>{movie.Title}</h1>
          </div>
          <div className='MovieMiddleSection fade-in'>
            <img className='fade-in' src={movie.Poster} alt="" />
            <div className='MovieInfo fade-in'>
              <p><span className='Label'>Title: </span>{movie.Title}</p>
              <p><span className='Label'>Rated: </span>{movie.Rated}</p>
              <p><span className='Label'>Released: </span>{movie.Released}</p>
              <p><span className='Label'>Genre: </span>{movie.Genre}</p>
              <p><span className='Label'>Director: </span>{movie.Director}</p>
              <p><span className='Label'>Actors: </span>{movie.Actors}</p>
              <p><span className='Label'>Awards: </span>{movie.Awards}</p>
              <p><span className='Label'>Language: </span>{movie.Language}</p>
              <p><span className='Label'>Country: </span>{movie.Country}</p>
              <p><span className='Label'>Production: </span>{movie.Production}</p>
              <p><span className='Label'>Writer: </span>{movie.Writer}</p>
            </div>
          </div>
          <div className='MovieBottomSection fade-in'>
            <h2 className='MovieBottomHeader'>What's the movie about?</h2>
            <p>{movie.Plot}</p>
          </div>
        </div>
        :
        <div className='fade-in'>
          <div className='DefaultMoviePage' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <LocalMoviesIcon/>
            <h1 className='DefaultMoviePageHeader'>TechFlix</h1>
          </div>
          <p className='DefaultMoviePageText'>Search and find your favorite movies effortlessly.</p>
        </div>
        }
        {error && <p className='Error fade-in'>{error}</p>}
    </div>
  )
}

export default Movie
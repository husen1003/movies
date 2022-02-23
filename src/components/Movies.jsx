import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        try {
            const res = await axios.get(
                'https://api.themoviedb.org/3/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1'
            );
            setMovies(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                margin: '20px 0',
            }}
        >
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="movie-card"
                    style={{
                        marginBottom: '20px',
                        border: '1px solid grey',
                        borderRadius: '10px',
                        overflow: 'hidden',
                    }}
                >
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            style={{ width: '100%' }}
                            alt={movie.title}
                        />
                    </div>
                    <div
                        style={{
                            margin: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: '#fff'
                        }}
                    >
                        {movie.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movies;

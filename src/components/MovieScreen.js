import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './MovieScreen.css';
import Movie from './Movie';
import { CgScreen } from 'react-icons/cg';





const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function MovieScreen() {


    const [movies, setMovies] = useState([]);

    const [searchMovie, setSearchMovie] = useState('');


    const getMovies = (API) => {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })
    }

    useEffect(() => {
        getMovies(Featured_API)

    }, [])


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchMovie) {

            getMovies(search_API + searchMovie);


            setSearchMovie('')

        }

    };

    const handleOnChange = (e) => {
        setSearchMovie(e.target.value)

    }


    return (
        <>
            <header> 
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className='movie-name'> 
                        <span className='maxi'> Maxirexy</span> 
                        <span className='cine'>Cinema</span > 
                        <span className='logo'> < CgScreen /></span>
                    </div > 
                </Link>
                
                <form onSubmit={handleOnSubmit}> 
                    < input className = "search"
                        type = "search"
                        placeholder = "Search..."
                        value = {searchMovie}                          
                        onChange = {handleOnChange}
                    />
                </form >
            </header>

                                        
            <div className="movie-container">

                {movies.map((movie) => 
                    <Movie key={movie.id} {...movie}/>
                )}

            </div>


        </>
       
    );
}

export default MovieScreen

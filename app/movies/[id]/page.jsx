// `https://api.themoviedb.org/3/movie/${movieId}?api_key=8803ec288dc063bf8e04afc712119092`
"use client";
import React, { useState, useEffect } from "react";

const MoviePage = ({ params }) => {
    const movieId = params.id;
    const [bestMovies, setBestMovies] = useState({});

    const fetchMovie = async () => {
        const topMovies = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=8803ec288dc063bf8e04afc712119092`
        );
        const tmovies = await topMovies.json();
        console.log(tmovies);

        setBestMovies(tmovies);
    };
    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/original/${bestMovies.backdrop_path || bestMovies.poster_path
                    }`}
            />

            <h1>{bestMovies.original_name || bestMovies.original_title}</h1>
            <p>{bestMovies.overview}</p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Date Released:</span>
                {bestMovies.release_date || bestMovies.first_air_date}
            </p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Rating:</span>
                {bestMovies.vote_count}
            </p>
        </div>
    );
};

export default MoviePage;

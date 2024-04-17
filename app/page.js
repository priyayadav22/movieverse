"use client"

import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function Home() {
    const [bestMovies, setBestMovies] = useState([])

    const fetchTopMovies = async () => {
        const topMovies = await fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=8803ec288dc063bf8e04afc712119092&include_adult=true&include_video=true&language=en-US&page=4&sort_by=popularity.desc
        `)
        const tmovies = await topMovies.json()
        setBestMovies(tmovies.results)
    }
    useEffect(() => {
        fetchTopMovies()
    }, [])

    return (
        <div className="flex justify-around py-10 gap-y-10 flex-wrap">
            {bestMovies?.map((topmov) =>
                <MovieCard
                    key={topmov.id}
                    imgSrc={topmov.backdrop_path || topmov.poster_path}
                    movieName={topmov.original_name ? topmov.original_name : topmov.original_title}
                    movieDescription={topmov.overview}
                    imbdRating={topmov.vote_average}
                    link={`/movies/${topmov.id}`}
                />
            )}
        </div>
    );
}

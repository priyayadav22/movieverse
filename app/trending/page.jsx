"use client"

import MovieCard from "@/components/MovieCard";
import { useEffect, useState } from "react";

export default function Trending_page() {
    const [weeklyTrending, setweeklyTrending] = useState([])

    const fetchWeeklyTrendingMovies = async () => {
        const moviefetch = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=8803ec288dc063bf8e04afc712119092&language=en-US&page=1`)

        const fetchedMovie = await moviefetch.json()
        setweeklyTrending(fetchedMovie.results)
        console.log(weeklyTrending)
    }

    useEffect(() => {
        fetchWeeklyTrendingMovies()
    }, [])

    return (
        <div className="flex justify-around py-10 gap-y-10 flex-wrap">
            {weeklyTrending.map((movie) => (
                <MovieCard
                    key={movie.id}
                    imgSrc={movie.backdrop_path || movie.poster_path}
                    movieName={movie.original_name ? movie.original_name : movie.original_title}
                    movieDescription={movie.overview}
                    imbdRating={movie.vote_average}
                />
            ))}
        </div>
    );
}

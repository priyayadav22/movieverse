"use client"
import MovieCard from '../../components/MovieCard'
import React, { useState } from 'react'

// https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false

const SearchPage = () => {
    const [query, setQuery] = useState("")
    const [queryresult, setQueryresult] = useState([])

    const handleUserSearch = async () => {
        const getSearch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8803ec288dc063bf8e04afc712119092&query=${query}&language=en-US&page=1&include_adult=false`)
        const searchresult = await getSearch.json()
        setQueryresult(searchresult.results)
    }

    return (
        <div>
            <div className='flex gap-5 items-center justify-center w-full p-5'>
                <input
                    className='w-[50%] rounded-lg border-pink-500 border p-3 text-pink-500 shadow-md shadow-pink-300'
                    type='text'
                    placeholder='Search...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='text-white py-3 px-5 rounded-lg bg-pink-500 shadow-md shadow-pink-300 ' onClick={handleUserSearch}>Search</button>
            </div>
            <div className="w-full flex justify-around py-10 gap-y-10 flex-wrap">
                {queryresult.length === 0 ? (
                    <h2>No Result found</h2>
                ) : (
                    queryresult?.map((search) =>
                        <MovieCard
                            key={search.id}
                            imgSrc={search.backdrop_path || search.poster_path}
                            movieName={search.original_name ? search.original_name : search.original_title}
                            movieDescription={search.overview}
                            imbdRating={search.vote_average}
                            link={`/movies/${movie.id}`}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default SearchPage
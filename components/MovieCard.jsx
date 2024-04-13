import Image from 'next/image'
import React from 'react'

const MovieCard = ({ imgSrc, movieName, movieDescription, imbdRating }) => {
    return (
        <div className="w-[400px] p-5 bg-gray-800 rounded-lg">
            <Image
                height={200}
                width={200}
                className="rounded-lg mx-auto mb-4"
                src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
                alt={movieName}
            />
            <h1 className="mb-3">Movie Name: {movieName}</h1>
            <p>Description: {movieDescription}</p>
            <p>IMBd Rating: {imbdRating}</p>
        </div>)
}

export default MovieCard
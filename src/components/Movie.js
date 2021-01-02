import React from "react";
import PropTypes from "prop-types";


//Movie 컴포넌트에는 state가 필요없어서 그냥 function으로 해도 ㄱㅊ
function Movie(year, title, summary, poster, genres) {
    return (
        <div className="movie">
            <img src = {poster} alt = {title} title = {title}></img>
        <div className = "movie_data">
            <h3 className = "movie_title">{title}</h3>
            <h5 className = "movie_year">{year}</h5>            
            <ul className="movie_genres">
                {genres.map((genre, index) => (
            <li key={index} className="genres_genre"></li> ))}
            </ul>
            <p className = "movie_summary">{summary.slice(0, 180)}...</p>
        </div>
        </div>)
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
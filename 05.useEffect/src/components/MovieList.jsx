import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const MovieList = () => {
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const Date = '20250611';
  const MOVIE_URL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${Date}`;

  const [movieList, setMovieList] = useState();

  const getMovieList = async() => {
        let res = await axios.get(MOVIE_URL);
         movies = res.data.boxOfficeResult.dailyBoxOfficeList.map((mv)=>({
            rank: mv.rank,
            movieNm: mv.movieNm,
            openDt: mv.openDt
        }));
        setMovieList(movies);
        console.log(movieList);

  }


useEffect(() => {
    getMovieList();
}, [])

  return (
    <div>
        <h1>영화 순위 목록</h1>
        <div>
        {/* {movieList.map((mv, i)=> {
                <p key={mv.rank}>
                    {mv.rank}.{mv.movieNm}|{mv.openDt}
                </p>
        })} */}
        </div>
    </div>
  );
}

export default MovieList
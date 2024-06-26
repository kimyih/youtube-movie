import React, { useEffect, useState } from 'react';
import { Yih } from '../data/Yih'; // Yih.js 파일에서 데이터 import
import { Global } from '../data/Global';
import { Action } from '../data/Action';
import { Romance } from '../data/Romance';
import { Comedy } from '../data/Comedy';
import { Musical } from '../data/Musical';
import { Animation } from '../data/Animation';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [globalMovies, setGlobalMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [comedyMovies, setcomedyMovies] = useState([]);
    const [musicalMovies, setMusicalMovies] = useState([]);
    const [animatioMovies, setAnimationMovies] = useState([]);

    useEffect(() => {
        // Yih 데이터를 사용하여 movies 상태를 설정
        setMovies(Yih.slice(0, 10)); // 예시로 10개만 가져옴
        setGlobalMovies(Global.slice(0, 10)); // 예시로 10개만 가져옴
        setActionMovies(Action.slice(0, 10)); // 예시로 10개만 가져옴
        setRomanceMovies(Romance.slice(0, 10)); // 예시로 10개만 가져옴
        setcomedyMovies(Comedy.slice(0, 10)); // 예시로 10개만 가져옴
        setMusicalMovies(Musical.slice(0, 10)); // 예시로 10개만 가져옴
        setAnimationMovies(Animation.slice(0, 10)); // 예시로 10개만 가져옴


    }, []);

    return (
        <div className='yih_page'> 
            <h1 className="yih-title"><em>2arth</em>의 추천 작품들 🎬 </h1>
            <h2 className="sub-title_korea">🇰🇷 국내의 감성을 느끼고 싶을 때</h2>
            <div className="yih_chart">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea">✈️ 세계 각국의 이야기에 빠지고 싶을 때 </h2>
            <div className="yih_chart">
                {globalMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea"> 💥 짜릿한 액션 씬을 즐기고 싶을 때</h2>
            <div className="yih_chart">
                {actionMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea">💕 달콤한 로맨스를 꿈꾸고 싶을 때</h2>
            <div className="yih_chart">
                {romanceMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea">✨ 기분 전환이 필요할 때 즐기는 코미디 </h2>
            <div className="yih_chart">
                {comedyMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea">🎶 음악의 매력에 빠지고 싶을 때</h2>
            <div className="yih_chart">
                {musicalMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-title_korea">🫧 상상력 넘치는 애니메이션 세계로 떠나고 싶을 때</h2>
            <div className="yih_chart">
                {Animation.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="movie-item-inner">
                            <img src={movie.img} alt={movie.title} className="movie-image" />
                            <div className="movie_info">
                                <h3>{movie.title}</h3>
                                <p>{movie.desc}</p>
                                <p><strong>장르:</strong> {movie.author}</p>
                                <p><strong>개봉날짜:</strong> {movie.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;

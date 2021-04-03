import React, { useState, useEffect, } from 'react';
//src
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
//style
import '../Styles/Row.css';
function Row({ title, url }) {
    const baseUrl = 'https://image.tmdb.org/t/p/original/';
    const [movie, setMovie] = useState([]);
    const [show, setShow] = useState(false);
    const [netflixOg, setNetflixOg] = useState(false);
    const [trailerId, setTrailerId] = useState('');
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleClick = (movieName) => {
        if (trailerId === '') {
            movieTrailer(movieName).then((fullink) => {
                if (fullink.match(/(youtube.com)/)) {
                    var split_c = "v=";
                    var split_n = 1;
                }
                var link = fullink.split(split_c)[split_n];
                setShow(true);
                setTrailerId(link);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            setTrailerId('');
            setShow(false);
        }
    };

    useEffect(() => {
        if (title === 'NETFLIX ORIGINALS') {
            setNetflixOg(true);
        }
    }, [title]);
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(url);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [url]);
    return (
        <div className='row'>
            <h2 className={netflixOg ? 'netflix_title' : undefined}>{title}</h2>
            <div className='row_posters'>
                {movie.map((item) => {

                    return (
                        <img className={netflixOg ? 'row_poster' : 'row_backdrop'}
                            key={item.id}
                            src={netflixOg ? `${baseUrl}${item.poster_path}` : `${baseUrl}${item.backdrop_path}`}
                            alt={item.title}
                            onDoubleClick={() => console.log('db click')}
                            onClick={() => {
                                handleClick(item.title || item.name || item.original_title || item.original_name);
                            }}
                        />
                    );
                })}
            </div>
            <div className='youtube_player'>
                {trailerId !== '' && show && <YouTube videoId={trailerId} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;

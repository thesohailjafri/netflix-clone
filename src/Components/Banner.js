import React, { useState, useEffect, } from 'react';
import { FiHeart, FiPlay } from "react-icons/fi";
// //src
import axios from '../axios';
//style
import '../Styles/Banner.css';
import requests from '../requests';
//component
import Loading from './Loading';

const Banner = () => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/';
    const data = requests.find(({ title }) => title === 'NETFLIX ORIGINALS');
    const [movie, setMovie] = useState([]);
    const [size, setSize] = useState(window.innerWidth);
    const [loading, setLoading] = useState(false);


    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const request = await axios.get(data.url);
                const gettingMovie = await request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
                setMovie(gettingMovie);
                setLoading(false);
                return request;
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [data.url]);

    return (
        <div className='banner'>
            {loading && <div><Loading /></div>}
            {!loading && <div className='pos hero_backdrop'>
                <img className='backdrop' src={`${baseUrl}${movie?.backdrop_path}`} alt={movie?.name} />
                <div className='pos hero-gradient'>
                </div>
            </div>}
            {!loading && <div className='pos hero_data'>
                <div ><h1 className='hero_name'>{movie?.title || movie?.name}
                </h1></div>
                <div className='hero_buttons'>
                    <button className='hero_button'>
                        <FiPlay />Play
                    </button>
                    <button className='hero_button'>
                        <FiHeart /> Wiselist
                    </button>
                </div>
                <div >
                    <h3 className='hero_info'>
                        {movie?.overview &&
                            size < 600 ?
                            (movie?.overview.substring(0, 150) + (movie?.overview.length > 150 ? '...' : ' ')) :
                            movie?.overview
                        }
                    </h3></div>
            </div>}



        </div>);
};


export default Banner; 
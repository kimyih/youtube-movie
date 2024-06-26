import React from 'react'
import { SiYoutubegaming } from 'react-icons/si';
import { BiSolidMoviePlay } from "react-icons/bi";

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href='/'>
                <em><BiSolidMoviePlay /></em>
                <span>Movie<br /><i>youtube</i></span>
            </a>
        </h1>
    )
}

export default Logo

import React from 'react'

import { MdMovieFilter } from "react-icons/md";
import { Link } from 'react-router-dom';
import { headerMenus, searchKeyword, snsLink } from '../../data/header';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <Link to="/">
                    <em><MdMovieFilter /></em>
                    <span>Movie<br /><i>youtube</i></span>
                </Link>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* menu */}
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* keyword */}
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href="{sns.url}" target='_blankl' rel="noopener noreferrer" aria-label='{sns.title}'>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* header__sns */}
        </header>
    )
}

export default Header

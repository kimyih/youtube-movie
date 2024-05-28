import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { LuClover } from "react-icons/lu";
import { GiSouthKorea } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { RiStarSmileLine } from "react-icons/ri";
import { GiMusicalNotes } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { FaRegHandRock } from "react-icons/fa";

export const headerMenus = [
    {
        title: "2arth",
        icon: <LuClover />,
        src: "/search/yih"
    }, {
        title: "국내 영화",
        icon: <GiSouthKorea />,
        src: "/search/국내 영화"
    }, {
        title: "해외 영화",
        icon: <AiOutlineGlobal />,
        src: "/search/해외 영화"
    }, {
        title: "액션 영화",
        icon: <FaRegHandRock />,
        src: "/search/액션 영화"
    }, {
        title: "로맨스 영화",
        icon: <FaHeart />,
        src: "/search/로맨스 영화"
    }, {
        title: "코미디 영화",
        icon: <RiStarSmileLine />,
        src: "/search/코미디 영화"
    }, {
        title: "뮤지컬 영화",
        icon: <GiMusicalNotes />,
        src: "/search/뮤지컬 영화"
    }, {
        title: "애니메이션 영화",
        icon: <GiSpellBook />,
        src: "/search/애니메이션 영화"
    }, {
        title: "영화OST",
        icon: <SiYoutubemusic />,
        src: "/search/영화 ost"
    },
]

export const searchKeyword = [
    {
        title: "국내영화",
        src: "/search/국내영화",
    }, {
        title: "해외영화",
        src: "/search/해외영화",
    }, {
        title: "액션영화",
        src: "/search/액션영화",
    }, {
        title: "로맨스영화",
        src: "/search/로맨스영화",
    }, {
        title: "코미디영화",
        src: "/search/코미디영화",
    }, {
        title: "뮤지컬영화",
        src: "/search/뮤지컬영화",
    }, {
        title: "애니메이션영화",
        src: "/search/애니메이션영화",
    }, {
        title: "영화OST",
        src: "/search/영화OST",
    }, {
        title: "영화예고편",
        src: "/search/영화예고편",
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/kimyih",
        icon: <AiFillGithub />
    }, {
        title: "youtube",
        url: "https://youtube",
        icon: <AiFillYoutube />
    }, {
        title: "codepen",
        url: "https://github.com/kimyih",
        icon: <AiFillCodepenCircle />
    }, {
        title: "애플",
        url: "https://github.com/kimyih",
        icon: <AiFillApple />
    },
]
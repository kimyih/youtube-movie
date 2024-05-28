import React from 'react'
import Main from '../components/section/Main'


import VideoSlider from '../components/video/VideoSlider'
import { Korea } from '../data/Korea'
import { Global } from '../data/Global'
import { Yih } from '../data/Yih'
import { Animation } from '../data/Animation'
import { Ost } from '../data/Ost'


// import YihCont from '../components/contents/YihCont'
// import OstCont from '../components/contents/OstCont'
// import AnimationCont from '../components/contents/AnimationCont'
// import KoreaCont from '../components/contents/KoreaCont'
// import GlobalCont from '../components/contents/GlobalCont'
// import ActionCont from '../components/contents/ActionCont'
// import MusicalCont from '../components/contents/MusicalCont'
// import RomanceCont from '../components/contents/RomanceCont'
// import ComedyCont from '../components/contents/ComedyCont'

const Home = () => {
    return (
        <Main
            title="영화"
            description="다양한 영화 정보">

            <VideoSlider videos={Korea} id="Korea" title="국내 영화🍿" />
            <VideoSlider videos={Global} id="Global" title="해외 영화🍿" />
            <VideoSlider videos={Animation} id="Animation" title="애니메이션 영화🍿" />
            <VideoSlider videos={Ost} id="Ost" title="영화 OST🍿" />
            <VideoSlider videos={Yih} id="Yih" title="추천 영화🍿" />

            {/* <section id='Korea'>
                <h2>국내 영화🍿</h2>
                <div className="video__inner">
                    {Korea.map((video, key) => (
                        <div className='video' key={key}>
                            <Link to="/video">
                                <img src={video.img} alt={video.title} />
                                {video.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

      
            {/* <YihCont />
            <KoreaCont />
            <GlobalCont />
            <AnimationCont />
            <OstCont />
            <ActionCont />
            <MusicalCont />
            <RomanceCont />
            <ComedyCont /> */}

        </Main>
    )
}

export default Home

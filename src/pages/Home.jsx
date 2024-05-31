import React from 'react'
import Main from '../components/section/Main'
import MovieSection from '../components/MovieSection'

const Home = () => {
    return (
        <Main>
            <div class="home_movie" style={{ marginTop: '20px' }}>
                <iframe
                    width="100%"
                    height="664"
                    src="https://www.youtube.com/embed/IR6WiFr8-qU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <MovieSection company="Megabox" title="Megabox" />
        </Main>
    )
}

export default Home

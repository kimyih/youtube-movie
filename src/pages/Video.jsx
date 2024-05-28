import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Video = () => {
    const { videoId } = useParams();
    const [videoDatail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data);
                setVideoDetail(data.items[0])
            })
    }, [videoId]);

    return (
        <Main
            title="어트랙션 유튜브"
            description="어트랙션 유튜브 비디오 페이지입니다.">

            <section id='videoViewPage'>
                {videoDatail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100vh'
                                style={{ poasition: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className="video__info">
                            <h2 className='title'>{videoDatail.snippet.title}</h2>
                            <div className='channel'>
                                <div>
                                    <Link to={`/channel/${videoDatail.snippet.channelId}`} className='channelTitle'>{videoDatail.snippet.channelTitle}</Link>
                                </div>
                                <div>
                                    <span className='view'><CiRead />{videoDatail.statistics.viewCount}</span>
                                    <span className='like'><CiStar />{videoDatail.statistics.likeCount}</span>
                                    <span className='comment'><CiChat1 />{videoDatail.statistics.commentCount}</span>
                                </div>
                            </div>
                        </div>
                        <div className='video_desc'>
                            {videoDatail.snippet.description}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video
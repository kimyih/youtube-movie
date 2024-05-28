import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideo, setChannelVideo] = useState([]);

    useEffect(() => {
        // 채널 정보를 가져오기
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                setChannelDetail(result.items[0])
            })
            .catch(error => console.log("채널 정보를 불러오는 중에 에러가 발생했습니다.", error))

        // 채널의 비디오 목록 가져오기
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=48&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setChannelVideo(result)
            })
            .catch(error => console.log("채널 정보를 불러오는 중에 에러가 발생했습니다.", error))
    }, [channelId]);

    return (
        <Main
            title='유튜버 채널'
            description='유튜버 채널 페이지입니다.'>

            {channelDetail && (
                <section id='channel'>
                    <div className="channel__header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className="circle">
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='info'>
                        <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                        <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                        <span><CiRead />{channelDetail.statistics.viewCount}</span>
                    </div>
                </section>
            )}
        </Main>
    )
}

export default Channel
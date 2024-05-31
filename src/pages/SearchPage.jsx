import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const SearchPages = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();
                setVideos(data.items);
                setNextPageToken(data.nextPageToken);

                // 최소 로딩 속도가 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID]);

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            try {
                const nextVideoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&pageToken=${nextPageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const nextVideoData = await nextVideoResponse.json();
                setVideos(prevVideos => [...prevVideos, ...nextVideoData.items]);
                setNextPageToken(nextVideoData.nextPageToken);
            } catch (error) {
                console.log('더 많은 비디오를 가져오는 중 오류가 발생했습니다.', error);
            }
        }
    }

    return (
        <Main
            title={`영화 페이지 : ${searchID}`}
            description={`영화 어쩌구 - 검색 키워드: ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2>🪄<em>{searchID}</em>를 검색한 결과 입니다.</h2>
                    <div className='video__inner search'>
                        <VideoView videos={videos} />
                    </div>
                    <div className='search__more'>
                        {nextPageToken && (
                            <button onClick={loadMoreVideos}>더보기</button>
                        )}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPages;

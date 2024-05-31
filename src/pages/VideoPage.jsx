import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CiChat1, CiStar, CiRead } from "react-icons/ci";

const Video = () => {
    const { videoID } = useParams();
    const [videoDatail, setVideoData] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const data = await response.json();
                setVideoData(data.items[0]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const data = await response.json();
                const fetchedComments = data.items.map(item => item.snippet.topLevelComment.snippet);
                setComments(fetchedComments);
            } catch (error) {
                console.log(error);
            }
        };

        fetchVideos();
        fetchComments();
    }, [videoID]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Main title="어트랙션 유튜브" description="어트랙션 유튜브 비디오 페이지입니다.">
            <section id='videoViewPage'>
                {videoDatail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoID}`}
                                width='100%'
                                height='100vh'
                                style={{ top: 0, left: 0 }}
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
                        <div className='video_comment'>
                            <h3>Comments</h3>
                            {comments.length > 0 ? (
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index} className="comment">
                                            <img src={comment.authorProfileImageUrl} alt={`${comment.authorDisplayName}'s profile`} className="comment__profile" />
                                            <div className="comment__content">
                                                <p className="comment__author"><strong>{comment.authorDisplayName}:</strong></p>
                                                <p>{comment.textDisplay}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No comments available.</p>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Video;

import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import video from './video/han-solo.mp4';


import '../index.css';
import cn from 'classnames';


const UiVideo = ({src = video, playbackRate = 1, classes}) => {
    const videoRef = useRef(null);
    
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);
    
    return (
        <video className={cn('video', classes)} ref={videoRef} loop={true} autoPlay={true} muted={true}>
            <source src={src}/>
        </video>
    );
};

UiVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string
};

export default UiVideo;
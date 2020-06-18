import qs from 'query-string';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'; 

class CourseVideo extends Component{
    static propTypes = {
        service: PropTypes.oneOf(['youtube', 'vimeo', 'dailymotion']).isRequired,
        video: PropTypes.string.isRequired
    };
    static urlMap= new Map([
        ['youtube', 'http://www.youtube.com/embed/'],
        ['vimeo', 'http://player.vimeo.com/video/'],
        ['dailymotion', 'http://www.dailymotion.com/embed/video/']
    ]);

    getIdFromVideo(vString){
        const urlArr = vString.split('/');
        const idString = urlArr[urlArr.length - 1];
        const queryParams = qs.extract(vString);

        return (queryParams && qs.parse(queryParams).v) || idString || '';
    }
    render(){
        const {service,video, ...htmlTags} = this.props;
        const src = `${CourseVideo.urlMap.get(service)}${this.getIdFromVideo(video)}`;
        return(
            <div className="container">

            <iframe 
                src={src}
                className="video"
                frameBorder='0'
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
                {...htmlTags}
            />
            {/* <ReactPlayer url={src} /> */}
            </div>
        );
    }
}

export default CourseVideo;
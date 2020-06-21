import React,{Component} from 'react';
import CourseVideo from './CourseVideo';
import Header from './HeaderView';
import './styles/styles.css';
import {Button } from 'reactstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

var videos = [
    {
      id: 0,
      name: 'How to Attempt JEE MAINS PAPER',
      service: 'youtube',
      video: 'https://www.youtube.com/watch?v=iPEW4xESkyc'
    },
    {   
        id: 1,
        name: 'How Many Hours Should You Study',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=TdYk7_gkYiI'
    },
    {
        id: 2,
        name: 'How to Prepare Physics for NEET',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=_7VB8iqUhVs'
    },
    {
        id: 3,
        name: 'How Many Hours to Study to crack',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=cCaNuE4kpks'
    },
    {
        id: 4,
        name: 'How to Study Inorganic Chemistry',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=csZ3iNt0PVU'
    },
    {
        id: 5,
        name: 'How many hours to study for IIT ',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=3OXlQtlWxro'
    },
    {
        id: 6,
        name: 'Important Books for JEE Mains ',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=JSHewjtRzYU'
    },
    {
        id: 7,
        name: 'Is it worth studying so much?',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=ej2zVEsNdMw'
    },
    {
        id: 8,
        name: 'How to Balance Class 12 Board Exams',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=HvHYVPwAWPI'
    },
    {
        id: 9,
        name: 'How to Avoid Silly Mistakes in JEE',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=V7V_yovGHOo'
    },
    {
        id: 10,
        name: 'How to prepare for JEE(Tips)  ',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=RkwGhCFcAno'
    },
    {
        id: 11,
        name: 'Best Motivational Video Compilation',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=LuCjFt2EgXY'
    },
    
    {
        id: 12,
        name: 'How to Prepare for JEE and NEET',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=7bORg5goMqE'
    },
    
    {
        id: 13,
        name: '5 Cheat Codes for Board Exams',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=wXshdhqEIfM'
    },
    
];

class CourseList extends Component{
    constructor(props){
        super(props);
        this.state={
            videoIndex: 0
        };
    
    }

    goToVideo (index){
        let videoIndex = index;
        if(videoIndex < 0){
            videoIndex = videos.length - 1;

        }else if(videoIndex >= videos.length){
            videoIndex = 0;
        }
        this.setState({
            videoIndex
        });
    }

    render(){
        const {service, video} = videos[this.state.videoIndex];
        const para = videos.map((video) => {
           return <Button className="btnbg" color="primary" onClick={this.goToVideo.bind(this, video.id)}>{video.name}</Button>
        })

        return(
            <>
            <Header name="Courses" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <CourseVideo service={service} video={video}/>
                    </div>
                    <div className="col-12 col-md-3 hbg">
                        
                            
                        <h3 style={{textAlign:"center", marginTop: '15px'}} >PLAYLIST</h3>
                        <PerfectScrollbar>
                            {para}
                        </PerfectScrollbar>
                        
                    </div>
                </div>
                
            </div>
            </>
        );
    }
}

export default CourseList;
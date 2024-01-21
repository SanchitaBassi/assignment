import React from 'react';
import './courseDetails.css'



const Details = [
    {
        id: 101,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png', //Link to the course thumbnail
        duration: 'Duration:8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: 'Basic JavaScript knowledge,Familiarity withReact',
    },
    {
        id: 102,
        name: 'Introduction to ReactJS',
        instructor: 'Smith Doe',
        description: 'Learn the basics of ReactJS development and build your first mobile app.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png', //Link to the course thumbnail
        duration: 'Duration:8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: 'Basic JavaScript knowledge, Familiarity withReact',
    },
    {
        id: 103,
        name: 'Introduction to React Native',
        instructor: 'Patricia',
        description: 'Learn the basics of React Native development andbuild your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png', //Link to the course thumbnail
        duration: 'Duration:8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: 'Basic JavaScript knowledge ,Familiarity withReact',
    },
    {
        id: 104,
        name: 'Introduction to NodeJS',
        instructor: 'Austin Wade',
        description: 'Learn the basics of React Native development andbuild your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png', //Link to the course thumbnail
        duration: 'Duration:8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: 'Basic JavaScript knowledge , Familiarity withReact',
    },

];

const syllabus = [
    {
        name:'Course:ReactJs',
        week: 'week 1',
        topic: 'Topic:Introduction to React Native',
        content: 'Description: Overview of React Native, setting up your development environment.'

    },
    {
        name:'Course:ReactJs',
        week: 'week 2',
        topic: 'Topic:Building Your First App',
        content: 'Description:Creating a simple mobile app using React Nativecomponents.'
    },
    {
        name:'Course:ReactJs',
        week: 'week 3',
        topic: 'Topic:Building Your First App',
        content: 'Description:Creating a simple mobile app using React Nativecomponents.'
    },
    {
        name:'Course:ReactJs',
        week: 'week 4',
        topic: 'Topic:Building Your First App',
        content: 'Description:Creating a simple mobile app using React Nativecomponents.'
    },
    // Additional weeks and topics...
];



const CourseDetails = () => {
    return (

        <div className='course-details'>
    <div className='course-header'>
        <h2>Courses Details</h2>
    </div>

    <div className='details-container'>
        {Details.map((student) => (
            <div className='course-card'>
                <div className='course-card-details'>
                    <img src={student.thumbnail} className='course-card-img' alt={student.name} />
                    <h2>{student.name}</h2>
                </div>
                <span>
                    {student.duration}
                    </span>
                <span>
                    {student.schedule}
                    </span>
                
                <span>
                    {student.location}
                    </span>
                <span>
                    {student.enrollmentStatus}
                    </span>
            </div>
        ))}
    </div>


    <div className='course-details'>
    <div className='course-header'>
        <h2>Syllabus Details</h2>
    </div>

    <div className='details-container'>
        {syllabus.map((syllabus) => (
            <div className='course-card'>
                <div className='course-card-details'>
                    <h2>{syllabus.name}</h2>
                </div>
                <span>
                    {syllabus.week}
                    </span>
                <span>
                    {syllabus.content}
                    </span>
                {/* <span>{student.prerequisites}</span> */}
                <span>
                    {syllabus.topic}
                    </span>
               
            </div>
        ))}
    </div>
</div>

</div>






    );
};

export default CourseDetails;
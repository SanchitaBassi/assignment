import React from 'react';
import './StudentList.css';

const students = [

    {
        image: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
        name: 'Alice',
        duration: '12hours',
        enrolledCourse: 'ReactJS, App Development ,MernStack',
    },

    {
        image: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
        name: 'Bob',
        duration: '12hours',
        enrolledCourse: 'ReactJS, Web Development ,NodeJs'
    },

    {
        image: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
        name: 'Genie',
        duration: '12hours',
        enrolledCourse: 'ReactNative, App Development ,Redux'
    },
];

const StudentList = () => {
    return (
        <div className='student-list'>

            <div className='list-header'>
                <h2>Students List</h2>

            </div>

            <div className='list-container'>

                {students.map( (student) => (
               
               <div className='lisst'>
                    <div className='student-details'>
                    <img src={student.image} alt= {student.name} className='student-img' />

                    <h2> { student.name}</h2>
                    </div>

                    <span>
                        {student.duration}
                    </span>
                    <span>
                        {student.enrolledCourse}
                    </span>
               </div>

                ))}

            </div>

        </div>
    );
};

export default StudentList;
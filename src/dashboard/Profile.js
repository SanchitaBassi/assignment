import React from 'react';
import ProfileHeader from './ProfileHeader';
import './Profile.css';
import { BiBook } from 'react-icons/bi';

const courses = [

    {
        title: 'ReactJs',
        duration: '3weeks',
        icon: <BiBook />,
        students: 'Students: Alice,Bob,Genie',
    },
    {
        title: 'Redux',
        duration: '3weeks',
        icon: <BiBook />,
        students: 'Students: Alice,Bob,Genie',
    },
    {
        title: 'NodeJs',
        duration: '3weeks',
        icon: <BiBook />,
        students: 'Students: Alice,Bob,Genie',
    },
   

];

const Profile = () => {
    return (
        <div className='profile'>
            <ProfileHeader />

            <div className='user-profile'>
                <div className='user-img'>
                    <img src='https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif' className='user-image' />
                </div>

                <div className='user-detail'>
                    <h3 className='username'>John Doe</h3>
                    <span className='profession'>Teacher</span>
                </div>

                <div className='user-courses'>
                    {courses.map((course) => (

                        <div className='course'>

                            <div className='course-details'>
                                <div className='course-cover'>
                                    {course.icon}
                                </div>
                                <div className='course-name'>
                                    <h5 className='title'> {course.title}</h5>
                                    <span className='duration'>{course.duration}</span>
                                    <div className='student-names'>
                         <span > {course.students}</span>
                      </div>
                                </div>


                            </div>

                           

                        </div>
                        
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Profile;
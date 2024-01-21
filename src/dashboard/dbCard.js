import React from 'react';
import { BiLogoAndroid, BiLogoNodejs, BiLogoReact } from 'react-icons/bi';
import './content.css';

const DbCourse=[

    {
        title:'Introduction to ReactJs',
        icon: <BiLogoReact/>,
    },

    {
        title: 'App Development',
        duration: '2hours',
        icon: <BiLogoAndroid/>,
    },

    {

        title: 'Introduction to NodeJs',
        duration:'3 weeks',
        icon: <BiLogoNodejs/>
    },
];


const DbCard = () => {
    return (
        <div className='db-card-content'>
          {DbCourse.map((item) => (
            <div className='db-card'>
             <div className='card-cover'>
              {item.icon}
                 </div>
                 <div className='db-card-title'>
                  <h2>{item.title}</h2>
                 </div>
                </div>
          ))} 
        </div>
    );
};

export default DbCard;
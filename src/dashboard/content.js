import React from 'react';
import ContentHeader from './contentHeader';
import "./content.css";
import DbCard from './dbCard';
import StudentList from './StudentList';



const Content = () => {
    return (
        <div className='content'>
            <ContentHeader/>
            <DbCard/>
           <StudentList/>
            
        </div>
    );
};

export default Content;
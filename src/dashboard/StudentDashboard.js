import React from 'react';
import Sidebar from './sidebar';
import Content from './content';
import Profile from './Profile';
import "./StudentDashboard.css";



const StudentDashboard = () => {
  return (

    <>
      <div className='student-dashboard'>

        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Content />
          <Profile/>

        </div>

      </div>



    </>

  );
};

export default StudentDashboard;
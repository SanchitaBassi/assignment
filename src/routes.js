import React from 'react';
import { Routes, Route } from "react-router-dom";

import StudentDashboard from './dashboard/StudentDashboard';
import CourseDetails from './courseDetails/courseDetails';




const RoutesComponent = () => {
  

//   const result = filteredData(products, selectedCategory, query);
    return (
        <Routes>
      
      {/* <Route path="/" element={<Products result={result} />} /> */}
      
      <Route path="/StudentDashboard" element={<StudentDashboard />} />
      
      <Route path="/CourseDetails" element={<CourseDetails />} />
    </Routes>
    );
};

export default RoutesComponent;
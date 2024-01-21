import { useState } from "react";
// import RoutesComponent from "./routes";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Card from "./components/Card";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from './dashboard/StudentDashboard';
import CourseDetails from './courseDetails/courseDetails';

import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => {

   const titleMatch = product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
   const instructorMatch =  product.instructor.toLowerCase().indexOf(query.toLowerCase()) !== -1;

   return titleMatch || instructorMatch;
  }
  
   
    
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews,  instructor }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          instructor={instructor}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {/* <Sidebar handleChange={handleChange} /> */}
      <Nav query={query} handleInputChange={handleInputChange} />
      <BrowserRouter>
      <Routes>
      <Route index element={<Products result={result} /> }/>
      <Route path="/StudentDashboard" element={<StudentDashboard />} />
      
      <Route path="/CourseDetails" element={<CourseDetails />} />
      </Routes>
      </BrowserRouter>
 
     
     
      
      
 
 
     
      
    </>
  );
}

export default App;

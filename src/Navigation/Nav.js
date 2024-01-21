import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import StudentDashboard from "../dashboard/StudentDashboard";
const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="logo-container">
        
          <img src="https://media.licdn.com/dms/image/C4E0BAQHHVlpeDRaGcw/company-logo_200_200/0/1630613115239?e=2147483647&v=beta&t=APMR_0dTHPjVui2oYU2b2ANE0q5zv74-wU8yS46Vuo0" 
            className="logo-img"/>
        </div>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search here"
        />
      </div>
      <div className="profile-container">
        
       
        <a href="/StudentDashboard">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

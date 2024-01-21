import { useNavigate } from "react-router-dom";
import '../Products/Product.css'

const Card = ({ img, title, star, reviews,  instructor }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="instructor-name">
            <div className="instructor">
              <h5>{instructor}</h5> 
            </div>
            </section>
            <div className="view-details">
            <button id="View" className="view-course" onClick={()=> navigate("/CourseDetails")}> Course Details </button> <br></br><br></br>
            </div>
        </div>
      </section>
    </>
  );
};

export default Card;

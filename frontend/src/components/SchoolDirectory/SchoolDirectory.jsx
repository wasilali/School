import "./directory.css";
import SchoolCard from "./SchoolCard.jsx";
import img from '../../image/addmission ads for school (1).png'
const SchoolDirectory = () => {
  const arry = [1, 3, 4, 5, 6, 7, 8, 9, 1];
  console.log(arry);
  return (
    <>
      <div className="background-animation">
        <div className="overlayy"></div>
        <div className="search-containerr py-10">
          <h1 className="text-[2rem] text-[yellow] font-[700] my-5">
            {" "}
            {"Let's Find!"}
          </h1>
          <p className="text-[1.2rem] text-[white] font-[100] my-5">
            Find the perfect school for your child
          </p>
          <input className="form-control" type="text" placeholder="Search" />
          <button className=" bg-primary text-white hover:bg-secondary">
            Search
          </button>
        </div>
      </div>
      <div>
        <h1 className=" text-center text-primary md:text-[3rem] text-[2rem] font-bold my-[5rem]">
          {" All School's In City"}
        </h1>

        <div className="px-5 xl:px-12 flex justify-center flex-wrap gap-4">
  {arry.map((items) => (
    <SchoolCard />
  ))}
</div>
      </div>

      <div className="poster my-[5rem]">
            <div className="poster-image">
              <img src={img} alt="Poster Image"/>
            </div>
            <div className="poster-content">
              <h2 className="poster-title text-[#009688x]">Movie Title</h2>
              <p className="poster-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="poster-button">Watch Trailer</a>
            </div>
          </div>
              
    </>
  );
};

export default SchoolDirectory;

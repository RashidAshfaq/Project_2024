import "./JobCard.css";

function JobCard() {
  return (
    <div className="jobCard">
      <div className={"job-image"}>{/*<img />*/}</div>
      <div className="jobContent">
        <h3 className="title">Web Programming Faculty</h3>
        <p className="date">Jan 20, 2023 - March 20, 2023</p>
        <p className="jobDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus illo
          rerum fugit enim vitae! Earum.Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Natus illo rerum fugit enim vitae! Earum.
        </p>
      </div>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;

import "./availableJob.css";
import JobContainer from "../jobcontainer/JobContainer.jsx";

const AvailableJob = () => {
  return (
    <div className={"available-jobs"}>
      <div className="searchInput">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <div className="jobPortion">
        <h2>Apply For Job</h2>
        <JobContainer />
      </div>

      <div className="countPage">
        <p className="number number-active">1</p>
        <p className="number">2</p>
        <p className="number">3</p>
      </div>
    </div>
  );
};

export default AvailableJob;

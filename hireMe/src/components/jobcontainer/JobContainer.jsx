import "./JobContainer.css";
import JobCard from "../jobcard/JobCard.jsx";
function JobContainer() {
  return (
    <div className={"job-container"}>
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}

export default JobContainer;

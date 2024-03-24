import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id)
  const job = jobs.find((job) => job.id ===intId);
  console.log(job);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
    <div className="border md:col-span-3">
        <h2 className="text-4xl ">Details coming here</h2>
        <p className="">{job.company_name}</p>
        <h2>Job Details: {job.job_title} </h2>

    </div>
    <div className="border ">
        <h2 className="text-2xl ">Side things</h2>
        <button className="btn btn-primary w-full">Apply now</button>
    </div>
      </div>
    </div>
  );
};

export default JobDetails;

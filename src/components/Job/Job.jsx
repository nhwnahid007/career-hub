import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
const Job = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div>
      <div className="">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-32 h-16"
              src={logo}
              alt="logo"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="">
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] bg-gradient-to-r from-indigo-400 to-purple-700 text-transparent bg-clip-text mr-4">{remote_or_onsite}</button>
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] bg-gradient-to-r from-indigo-400 to-purple-700 text-transparent bg-clip-text mr-4">{job_type}</button>
            </div>
            <div className="card-actions">
              <button className="btn text-white bg-gradient-to-r from-indigo-400 to-purple-700">View Details</button>
            </div>
            <div className="mt-4 flex justify-between">
            <h2 className="flex items-center">
                <IoLocationOutline className="text-2xl mr-2" />
                {location}
            </h2>
            <h2 className="flex items-center">
                <FaDollarSign className="text-2xl mr-2" />
                {salary}
            </h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Job.propTypes={
    job: PropTypes.object.isRequired,
}
export default Job;

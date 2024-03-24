
const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
    
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  //to check duplicate
  const exists = storedJobApplications.find(JobId => JobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedJobApplications)
    );
  }
};

export { saveJobApplication, getStoredJobApplication };

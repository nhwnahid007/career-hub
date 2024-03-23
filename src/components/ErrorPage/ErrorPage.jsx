import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
           <h1>Oooooooooppppsss!</h1> 
           <Link to={'/'}><button className="btn">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom";

const Error = () => {
      return (
            <div className=" w-full h-[100vh] flex items-center justify-center flex-col gap-3">
                  <div className=" w-fit h-fit">
                        <img className=" w-96" src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="" />
                  </div>
                  <div>
                        <Link to='/'> <button className=" btn" >Back to Home</button></Link>
                  </div>

            </div>
      );
};

export default Error;
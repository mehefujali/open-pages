import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";


const Root = () => {
      return (
            <div>
                  <Nav></Nav>
                  <div className=" container mx-auto mt-14 px-4">
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Root;
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './root.css'

const Root = () => {
      return (
            <div>
                  <Nav></Nav>
                  <div className=" container mx-auto mt-14 px-4  min-h-[calc(100vh-232px)]" id="main-outlet">
                        <Outlet></Outlet>
                  </div>
                  <footer className=" mt-12">
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;
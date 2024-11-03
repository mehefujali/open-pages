import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './root.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
      return (
            <div>
                  <Nav></Nav>
                  <div className=" container mx-auto mt-14 px-4  min-h-[calc(100vh-232px)]" id="main-outlet">
                        <ToastContainer
                              autoClose={600}
                              theme="colored"



                        />
                        <Outlet></Outlet>
                  </div>
                  <footer className=" mt-12">
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;
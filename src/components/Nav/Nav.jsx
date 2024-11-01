import { Link, NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
      const links = <div>
            <NavLink>Home</NavLink>
            <NavLink>Listed Books</NavLink>
            <NavLink>Pages to Read</NavLink>
      </div>
      return (
            <nav className="">
                  <div className="navbar  items-center container mx-auto ">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {links}
                                    </ul>
                              </div>
                              <Link to='/'><a className=" text-2xl font-bold ">Open pages</a></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 gap-8 items-center  " id="Navlinks">
                                    <NavLink to="/home">Home</NavLink>
                                    <NavLink to="/listed-books">Listed Books</NavLink>
                                    <NavLink to='/pages-to-read'>Pages to Read</NavLink>
                              </ul>
                        </div>
                        <div className="navbar-end flex gap-4 items-center">
                              <a className="btn text-[#23BE0A] btn-outline border-[#23BE0A] hover:bg-[#23BE0A] hover:border-none">Sign In</a>
                              <a className="btn bg-[#23BE0A] hover:bg-[#188a09] text-white">Sign up</a>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;
import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { FaBars } from "react-icons/fa";
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
                                    <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                                          <FaBars />
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <div className=" flex flex-col gap-4">
                                                <NavLink to="/home">Home</NavLink>
                                                <NavLink to="/listed-books">Listed Books</NavLink>
                                                <NavLink to='/pages-to-read'>Pages to Read</NavLink>
                                          </div>
                                    </ul>
                              </div>
                              <Link to='/'><a className=" text-md sm:text-xl md:text-2xl font-bold ">Open pages</a></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 gap-8 items-center  " id="Navlinks">
                                    <NavLink to="/home">Home</NavLink>
                                    <NavLink to="/listed-books">Listed Books</NavLink>
                                    <NavLink to='/pages-to-read'>Pages to Read</NavLink>
                              </ul>
                        </div>
                        <div className="navbar-end flex gap-1 sm:gap-2 md:gap-4 items-center">
                              <a className="btn btn-sm md:btn-md text-[#cca97b] btn-outline border-[#cca97b] hover:bg-[#cca97b] hover:border-none hover:text-white">Sign In</a>
                              <a className="btn btn-sm md:btn-md bg-[#cca97b] hover:bg-[#bb9e79] text-white">Sign up</a>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;
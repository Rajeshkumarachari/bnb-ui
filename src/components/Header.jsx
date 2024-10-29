import logo from "../assets/favicon-bnb.ico";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className=" bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className=" flex cursor-pointer">
            <img src={logo} alt="" />
            <h1 className=" text-rose-500 text-xl sm:text-2xl font-semibold text-">
              Rajeshbnb
            </h1>
          </div>
        </Link>
        <form className=" bg-slate-100 px-3 py-1 rounded-3xl flex items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 px-3 sm:w-64"
            placeholder="Search Destinations"
          />
          <FaSearch className=" bg-rose-500 text-white  rounded-full size-10 p-3" />
        </form>
        <ul className=" flex gap-2">
          <Link to="/">
            <li className=" hidden sm:inline text-slate-700  hover:bg-slate-300 px-3 py-2 rounded-2xl">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" hidden sm:inline text-slate-700 hover:bg-slate-300 p-2 rounded-2xl">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

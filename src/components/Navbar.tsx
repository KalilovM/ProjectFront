import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  const [isLoginShow, setIsLoginShow] = React.useState(false)

  const handleLoginShow = () => {
    setIsLoginShow((isLoginShow) => !isLoginShow)
  }

  return (
    <header className={"relative z-[100] w-full leading-10 bg-gray-700"}>
        <div className="flex items-center h-16 relative text-left page-width">
          <div className="flex-none order-1 ml-auto mr-3">
            <div className="relative">
              <button onClick={handleLoginShow} className="min-h-8 w-14 rounded-md bg-blue-500 text-white text-sm font-bold px-1.5 py-2.5 inline-flex items-center justify-center leading-none">Login</button>
              {/* TODO:shadow */}
              <div className={"absolute right-0 top-12 z-[1010] w-[325px] p-5 cursor-pointer rounded-sm bg-gray-800 " + (isLoginShow ? 'visible' : "invisible")}>
                <Link to={"/login"} className="mb-2.5 block w-full text-center rounded-sm bg-blue-500 text-white font-bold px-4 py-2 min-h-9 text-base leading-tight">Login</Link>
                <a href="#" className="block w-full text-center rounded-sm bg-white text-blue-500 font-bold px-4 py-2 min-h-9 text-base leading-tight">Register</a>
              </div>
            </div>
          </div>
          <div className="flex self-stretch relative min-w-0">
            <div className="flex overflow-auto px-0.5">
              <a href="#" className="text-white flex items-center px-2.5 text-lg">Home</a>
              <a href="#" className="text-white flex items-center px-2.5 text-lg">Projects</a>
              <a href="#" className="text-white flex items-center px-2.5 text-lg">Companies</a>
              <a href="#" className="text-white flex items-center px-2.5 text-lg">About</a>
              <a href="#" className="text-white flex items-center px-2.5 text-lg">Contact</a>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Navbar;
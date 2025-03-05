import React from "react";
import logo from "../assets/logo.svg";
import arrow_left from "../assets/arrow_icon.svg";
import { Link } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

function NavBar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const handleSignIn = () => {};

  return (
    <>
      <div className="flex justify-between text-center sm:px-5 sm:py-2 sm:m-5 md:mx-20 lg:mx-44 m-5">
        {/* <div className="flex justify-around text-center sm:px-5 sm:pt-4 "> */}
        <div className="logo">
          <Link to="/">
            <img className="w-32 sm:w-44" src={logo} alt="bg.removal" />
          </Link>
        </div>
        {/* Check the User is signedIn || Not */}
        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            className=" flex  bg-neutral-700 px-4 py-2 cursor-pointer rounded-full text-white font-semibold text-xl hover:scale-105 transition-all duration-500"
            onClick={() => {
              openSignIn({});
            }}
          >
            Get Started
            <img className="ml-4" src={arrow_left} alt="" />
          </button>
        )}
      </div>
    </>
  );
}

export default NavBar;

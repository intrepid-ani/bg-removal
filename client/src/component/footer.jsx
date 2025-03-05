import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between lg:mx-44 md:mx-24 mx-5 py-5 gap-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
          <Link to="/">
            <img className="w-28 sm:w-36" src={assets.logo} alt="bg.removal" />
          </Link>
          <p className="font-medium text-lg text-neutral-600 md:ml-3">
            <span className="text-2xl font-extrabold">| </span>
            All rights reserved. © {new Date().getFullYear()}.
          </p>
        </div>

        {/* Social Media Links - Centered on Small Screens */}
        <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto">
          <Link to="https://www.facebook.com/">
            <img
              src={assets.facebook_icon}
              className="w-8 sm:w-10"
              alt="Facebook"
            />
          </Link>
          <Link to="https://x.com/home">
            <img
              src={assets.twitter_icon}
              className="w-8 sm:w-10"
              alt="Twitter"
            />
          </Link>
          <Link to="/">
            <img
              src={assets.google_plus_icon}
              className="w-8 sm:w-10"
              alt="Google Plus"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-16 bg-gray-700">
      <div className="container mx-auto flex items-center h-full">
        <Link to="/">
          <h1 className="text-gray-100 text-2xl">Code Workshop Blog</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;

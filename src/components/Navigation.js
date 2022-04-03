import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="nav-wrapper flex justify-around p-4 bg-yellow">
      <div className="logo">
        <h4 className="text">Pokemon</h4>
      </div>
      <div className="nav-menu flex gap-x-8">
        <Link to="/">Home</Link>
        <Link to="/">Pokemon List</Link>
        <Link to="/favorite">My Pokemon</Link>
      </div>
    </div>
  );
}

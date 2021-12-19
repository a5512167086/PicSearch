import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/nav.scss'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

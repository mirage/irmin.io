import { Link } from "gatsby";
import React from "react";

import "./tutorialSidebar.css";

const TutorialSidebar = ({ pages, currentLink }) => {
  return (
    <nav className="tutorial-sidebar">
      <h3>Tutorial</h3>
      <ul>
        {pages.map((p, i) => {
          if (p.link === currentLink) {
            return (
              <li key={p.title}>
                <Link to={p.link} className="active">
                  {i + 1}. {p.title}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={p.title}>
                <Link to={p.link}>
                  {i + 1}. {p.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default TutorialSidebar;

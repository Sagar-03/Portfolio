import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

const Nav = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={navbarBlur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        SJ
      </h1>

      <div className="Hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "barOne" : ""}`}></span>
        <span className={`bar ${menuOpen ? "barTwo" : ""}`}></span>
        <span className={`bar ${menuOpen ? "barThree" : ""}`}></span>
      </div>

      <ul className={`NavbarLinks ${menuOpen ? "showNavbar" : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/Project">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/Skill">
            <BsCodeSlash /> Skillset
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/Contact">
            <CgPhone /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
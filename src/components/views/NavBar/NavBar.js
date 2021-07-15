import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(
      window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div style={{height:80, backgroundColor:"rgb(165, 191, 228)"}}>
      <div
        className={scrollPosition < 100 ? "original_header" : "change_header"}
      >
        <Link to="" className="nav_title">
          0942
        </Link>
        <Link to="/login" className="nav_login">
          로그인
        </Link>
        <Link to="/register" className="nav_signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NavBar);

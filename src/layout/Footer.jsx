import React, { useContext } from "react";
import { AppContext } from "../App";
function Footer() {
  const { about } = useContext(AppContext);
  return (
    <>
      <footer id="footer">
        <div className="container">
          @{about.firstname}
          {about.lastname}
        </div>
      </footer>
    </>
  );
}

export default Footer;

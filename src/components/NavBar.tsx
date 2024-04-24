import { ChangeEventHandler, useState } from "react";
import "./NavBar.css";
import Dialog from "./Dialog";
import Timepart from "./Timepart";

const NavBar = () => {
  const [keepit, setKeepit] = useState(true); // Use state hook to manage keepit
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("checkedorun");
    setKeepit(e.target.checked); // Update state instead of directly manipulating keepit
    if (e.target.checked) {
      console.log("checked");
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      document.body.style.color = "white";
    } else {
      console.log("unchecked");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  let imgnumber: number = Math.floor((Math.random() * 10) / 3);
  console.log(imgnumber);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="topnav">
        <div className="align"></div>
        <div id="quote">
          sometimes long days are passed as short in memories
        </div>
        <button id="publicButton">
          <img />
          public
        </button>
        <Dialog />
        <button id="settingButton">
          <img />
          button
        </button>
        <div id="time">
          <Timepart></Timepart>
        </div>
        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit" className="submitbut">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        {/* Theme switch should be placed here */}
        <div className="theme-switch">
          <input
            type="checkbox"
            id="toggle"
            onChange={handleChange}
            checked={keepit}
          />
          <label htmlFor="toggle"></label>
        </div>
      </div>
    </>
  );
};

export default NavBar;

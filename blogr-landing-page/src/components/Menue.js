import React from "react";
import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Menue = ({ setOpen,Isopen }) => {
  return (
    <div>
      <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <img src={Isopen? close: open} alt='' />
      </button>
    </div>
  );
};

export default Menue;

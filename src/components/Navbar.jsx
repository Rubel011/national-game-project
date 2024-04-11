import React, { memo } from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div></div>
        <h1>Menu</h1>
      </div>
      <div>
        <div>
          <p>Ticketing</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default memo(Navbar);

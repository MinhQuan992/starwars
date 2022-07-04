import React from "react";

interface NavBarProps {
  setPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setPage }) => {
  return (
    <div>
      <nav>
        <button onClick={() => setPage("planets")}>Planets</button>
        <button onClick={() => setPage("people")}>People</button>
      </nav>
    </div>
  );
};

export default NavBar;

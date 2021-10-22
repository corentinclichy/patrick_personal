import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["A PROPOS", "LES EXPOSITIONS", "LA GALLERIE", "CONTACT"];

  return (
    <nav className="relative w-full h-full ">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`nav-bar-mobile w-screen h-screen bg-[#F07047] fixed top-0 left-0  z-0 ${
          !isOpen && "hidden"
        }  p-12 md:p-36`}
      >
        <ul className="text-2xl font-bold text-white md:text-5xl ">
          {menuItems.map((item, index) => (
            <li key={index} className="my-32">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

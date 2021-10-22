function HamburgerMenu({ isOpen, setIsOpen }) {
  const genericHamburgerLine = `h-1 w-6  rounded-full ${
    isOpen ? "bg-white" : "bg-black"
  } transition ease transform duration-300`;

  return (
    <button
      className="absolute right-0 z-50 flex flex-col items-center justify-center w-12 h-12 transform -translate-y-1/2 top-1/2 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "rotate-45 translate-y-3"
        }`}
      />
      <div
        className={`mt-1 mb-1   ${genericHamburgerLine} ${
          isOpen ? "opacity-0" : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "-rotate-45 -translate-y-1 "
        }`}
      />
    </button>
  );
}

export default HamburgerMenu;

const NavItem = ({ show, children }) => {
  return (
    <ul
      className={`${
        show ? "flex flex-col gap-2" : "hidden"
      } lg:flex lg:flex-row lg:items-center lg:gap-4`}
    >
      {children}
    </ul>
  );
};

export default NavItem;

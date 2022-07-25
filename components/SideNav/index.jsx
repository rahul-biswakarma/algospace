import NavHeader from "./sub-component/NavHeader";
import NavLinks from "./sub-component/NavLinks";

const SideNav = (props) => {
  return (
    <div className="sticky bg-bg-1 max-h-screen h-full auto-col-min w-full border-r-2 border-border-1 overflow-hidden">
      <div className="w-screen h-0 border-b-2 border-border-1"></div>
      <NavHeader />
      <div className="flex flex-col">
        <NavLinks />
      </div>
    </div>
  );
};

export default SideNav;

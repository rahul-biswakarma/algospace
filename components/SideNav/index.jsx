import NavLinks from "./sub-component/NavLinks";
import NavHeader from "./sub-component/NavHeader";

export default function SideNav() {
  return (
    <div
      id="side-nav"
      className="absolute w-[90%] left-[-100%] top-[70px] md:sticky md:left-0 md:top-0 z-10 bg-bg-1 max-h-screen h-full auto-col-min md:w-full border-r-2 border-border-1 overflow-hidden ease-in duration-300"
    >
      {/* Enable top border on whole view point */
      /* <div className="w-screen h-0 border-b-2 border-border-1"></div> */}
      <NavHeader />
      <div className="flex flex-col">
        <NavLinks />
      </div>
    </div>
  );
}

import "../styles/globals.css";
import SideNav from "../components/sidenav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container-algospace">
      <SideNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

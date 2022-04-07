import "/styles/globals.css";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import SideNav from "/components/sidenav";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container-algospace">
      <SideNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

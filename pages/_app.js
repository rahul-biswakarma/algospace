import "/styles/globals.css";
import { store } from "/redux/store";
import { Provider } from "react-redux";
import SideNav from "/components/SideNav";
import Router from "next/router";
import Header from "/components/Header";
import NProgress from "react-nprogress";
import { Analytics } from "@vercel/analytics/react";

import "/styles/nprogress.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="md:grid md:grid-cols-[35vw_auto] lg:grid-cols-[30vw_auto] xl:grid-cols-homeLayout min-h-screen bg-bg-1">
      <Provider store={store}>
        <SideNav />
        <div id="app-container">
          <Header />
          <Component {...pageProps} />
          <Analytics />
        </div>
      </Provider>
    </div>
  );
}

export default MyApp;

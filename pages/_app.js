import "/styles/globals.css";
import { store } from "/redux/store";
import { Provider } from "react-redux";
import SideNav from "/components/SideNav";
import Router from "next/router";
import Header from "/components/Header";
import "/styles/nprogress.css";
import NProgress from "react-nprogress";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-homeLayout min-h-screen bg-bg-1">
      <Provider store={store}>
        <SideNav />
        <div id="app-container">
          <Header />
          <Component {...pageProps} />
        </div>
      </Provider>
    </div>
  );
}

export default MyApp;

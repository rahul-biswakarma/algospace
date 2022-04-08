import "/styles/globals.css";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import SideNav from "/components/sidenav";
import { motion, AnimatePresence } from "framer-motion";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageIniital"
      animate="pageAnimate"
      exit="pageExit"
      className="main-container-algospace"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          background: "var(--bg)",
          opacity: 0,
        },
      }}
    >
      <SideNav />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;

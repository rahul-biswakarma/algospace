import "/styles/globals.css";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { motion } from "framer-motion";
import SideNav from "/components/sidenav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        id="function-status"
        data-func-status="1"
        style={{ display: "none", position: "absolute" }}
      ></div>
    </motion.div>
  );
}

export default MyApp;

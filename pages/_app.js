import "/styles/globals.css";
import { store } from "/redux/store";
import { Provider } from "react-redux";
import SideNav from "/components/SideNav";
import Header from "/components/Header";

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

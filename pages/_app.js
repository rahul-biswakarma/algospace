import "/styles/globals.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import SideNav from "/components/SideNav";
import PageHeader from "/components/PageHeader";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <div className="grid grid-cols-homeLayout min-h-screen bg-bg-1">
        <SideNav />
        <div id="app-container">
          <PageHeader pageName="Home" />
          <Component {...pageProps} />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;

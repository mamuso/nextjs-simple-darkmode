import "../styles/index.css";
import CSSVars from "../components/CSSVars";
function App({ Component, pageProps }) {
  return (
    <>
      <CSSVars />
      <Component {...pageProps} />
    </>
  );
}

export default App;

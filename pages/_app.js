import "../styles/globals.css";
import { Context } from "../Context/menuContext";
import { ContextProvider } from "../Context/menuContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;

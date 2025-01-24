import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../utils/store/index";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: any) => (
  <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </Provider>
);

export default MyApp;

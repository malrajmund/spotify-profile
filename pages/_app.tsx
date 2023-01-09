import type { AppProps } from "next/app";
import GlobalStyles from "../src/config/styles/global.styles";
import store from "../src/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {" "}
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

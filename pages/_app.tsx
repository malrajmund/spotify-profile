import type { AppProps } from "next/app";
import GlobalStyles from "../src/config/styles/global.styles";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "../src/tools/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

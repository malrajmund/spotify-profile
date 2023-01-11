import type { AppProps } from "next/app";
import GlobalStyles from "../src/config/styles/global.styles";
import store from "../src/redux/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { setToken, setRefreshToken, setIsAuthed } from "../src/redux/reducers/userDataReducer/userDataReducer";
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

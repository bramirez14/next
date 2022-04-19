import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
/* import "../styles/variables.less" */
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
  
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

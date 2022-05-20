import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/auth";
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }: AppProps) {
  console.log({...pageProps});
  
  return (
    <SessionProvider>
         <AuthProvider>
            
             
            <Component {...pageProps} />
     
   
  </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;

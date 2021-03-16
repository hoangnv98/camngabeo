import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

// export default class MyApp extends React.Component<AppProps> {
//   render() {
//     return (
// <div className="root-app">
//   <Head>
//     <title>Base App</title>
//     <link rel="icon" href="/favicon.ico" />
//     <link rel="stylesheet" href="/global.css" />
//   </Head>
//   <this.props.Component {...this.props.pageProps} />
// </div>
//     );
//   }
// }

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="root-app">
      <Head>
        <title>Base App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

// export default function MyApp({ Component, pageProps }) {
//   // Componnent -> nhan 1 url
//   return (
//     <div className="root-app">
//       <Head>
//         <title>Base App</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/global.css" />
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   );
// }
export default CustomApp;

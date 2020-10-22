import { Provider } from "react-redux";
import { useStore } from "../redux/store";

const myApp = ({ Component, pageProps }) => {
  // console.log("myApp -> pageProps", pageProps)
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default myApp


// import { FC } from "react";
// import { AppProps, AppContext } from "next/app";
// import { wrapper } from "../redux/store.ts";


// const myApp: FC<AppProps> = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// myApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   ctx.store.dispatch(App("was set in _app"));

//   return {
//     pageProps: {
//       ...(Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {}),
//       appProp: ctx.pathname,
//     },
//   };
// };

// export default wrapper.withRedux(myApp);
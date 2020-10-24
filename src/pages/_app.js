import { wrapper } from '../redux/store'

const WrappedApp = ({ Component, pageProps }) => {
  console.log("WrappedApp -> pageProps", pageProps)
          return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

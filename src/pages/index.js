import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from '../components/Page'
import { wrapper } from '../redux/store'
import { serverRenderClock, startClock } from '../redux'

const Index = (props) => {
  useEffect(() => {
    const timer = props.startClock()

    return () => {
      clearInterval(timer)
    }
  }, [props])

  return <Page title="Index Page" linkTo="/ssr" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true))
})

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Index)

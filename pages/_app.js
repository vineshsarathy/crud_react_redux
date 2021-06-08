import store from '../redux/store/store'
import { Provider } from 'react-redux'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return( 
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp

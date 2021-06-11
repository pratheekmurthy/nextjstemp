import {Provider } from 'react-redux'
import configureStore from '../redux/store'
import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css'
import "../public/css/styles.css"


function MyApp({ Component, pageProps }) {


  const store = configureStore()
 
    return (<div className="content">
      <Provider store={store}>
        <TopNav/>
       <Component {...pageProps} />
       </Provider>
    </div>)
    
  }

  export default MyApp
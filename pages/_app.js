import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css'
import "../public/css/styles.css"


function MyApp({ Component, pageProps }) {
 
    return (<div className="content">
        <TopNav/>
       <Component {...pageProps} />
    </div>)
    
  }

  export default MyApp
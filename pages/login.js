import {useRouter} from 'next/router'
import {useSelector,useDispatch} from 'react-redux'
import {toggleStatus,getALLCountries} from '../redux/actions/logActions'
import axios from 'axios'
import { useEffect } from 'react'

const Login =()=>{
    const log = useSelector(state => state.log)
    const countries = useSelector(state => state.countries)

    console.log(countries)

    const dispatch = useDispatch()

    const handlelogin =(e)=>{
        dispatch(toggleStatus())
    }

    // const getCountries =()=>{
    //     axios.get(`https://restcountries.eu/rest/v2/all`)
    //         .then((res)=>{
    //             console.log(res.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }
    
    useEffect(()=>{
        dispatch(getALLCountries())
    },[])

    console.log(log)

    const router = useRouter()

    return (<>
    <div className="jumbotron text-center bg-primary square">
        <br/><br/><br/><br/><br/>
    <h1 className="white"> Login Page</h1>
    </div>
    <div>
        <br/>
        <button onClick={handlelogin} className="button1">login</button>
    </div>
        
    </>)
}

export default Login
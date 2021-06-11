import {useState} from 'react'
import {useSelector} from 'react-redux'

const Register =()=>{
    const log = useSelector(state => state.log)
    const countries = useSelector(state => state.countries)

    console.log(countries)
    console.log(log)


    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.table(email,password,name)
    }


    return (<>
          <div className="jumbotron text-center bg-primary square">
        <br/><br/><br/><br/><br/>
        <h1 className="white"> Register Page</h1>
    </div>
    <br/>
    <div className="container col-md-4 offset-md-4 pb-5">
    <input 
            type="email"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter name"
        />
        <input 
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
        />
        <input 
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
        />
       
        <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
    </div>
    </>)
}

export default Register
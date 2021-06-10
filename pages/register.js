import {useState} from 'react'

const Register =()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

    const handleSubmit =(e)=>{

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
       
        <button type="submit" class="btn btn-primary btn-lg btn-block ">Submit</button>
    </div>
    </>)
}

export default Register
import { useState } from "react";

const ControlComponent = () =>{

    const [name, setName]=useState();
    const [password, setPassword]=useState();
    const [email, setEmail]=useState();

    const handlerReset = () =>{

        setName("");
        setEmail("");
        setPassword("")
    }



    return (
        <div>
        <h1>Control component Form </h1>
        <form action="" method="get">
        <label htmlFor="text">Name: </label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name" />
        <br />
        <label htmlFor="password"> Password: </label>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email" />
        <br />
        <button>Submit</button>
        <button onClick={handlerReset}>Reset</button>

        </form>

        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>

        </div>
    )
}

export default ControlComponent;
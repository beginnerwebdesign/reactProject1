import { Button, FormLabel } from "@mui/material";
import Title from "./Title";
import {TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn()
{
    let [email,setEmail]=useState('')
    let navigate=useNavigate();
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <Title name="Sign In" />
            </div>
            <form onSubmit={e=>{email?navigate("/adminhome"):navigate("/memberhome");}}>
            <div className="row align-items-center">
                <div className="col-4 offset-4 p-2">
                <FormLabel>Email</FormLabel>
                </div>
                <div className="col-5 offset-4 p-2">
                <TextField onChange={e=>setEmail(e.target.value)} value={email} id="outlined-basic" label="Email" variant="outlined" size='small' />
                </div>
                <div className="col-5 offset-4 p-2">
                <FormLabel>Password</FormLabel>
                </div>
                <div className="col-5 offset-4 p-2">
                <TextField id="outlined-basic" label="Password" variant="outlined" size='small' />
                </div>
                <div className="col-5 offset-4 p-2">
                    <Button type="submit">Login</Button>
                    <Button onClick={e=>navigate("/verify")} >Forgot Password</Button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}
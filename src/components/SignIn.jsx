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
            <div style={{textAlign:"center"}}>
                <div style={{padding:"20px"}}>
                <label style={{paddingRight:"20px"}}>Email</label>
                <TextField onChange={e=>setEmail(e.target.value)} value={email} id="outlined-basic" label="Email" variant="outlined" size='small' />
                </div>
                <div style={{padding:"20px"}} >
                <label style={{paddingRight:"20px"}}>Password</label>
                
                <TextField id="outlined-basic" label="Password" variant="outlined" size='small' />
                </div>
                <div style={{padding:"20px"}}>
                    <Button type="submit">Login</Button>
                    <Button onClick={e=>navigate("/verify")} >Forgot Password</Button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}
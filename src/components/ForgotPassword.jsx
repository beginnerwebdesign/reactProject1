import { Button, TextField } from "@mui/material"
import Title from "./Title"
export default function ForgotPassword()
{
    return(
        <>
        <div style={{padding:"50px"}}>
            <div style={{padding:"50px"}} >
                <Title name="Reset Password" />
            </div>
            <form>
            <div >
                
                <div style={{textAlign:"center"}}>
                <label style={{padding:"3px"}}> EMAIL ADDRESS:</label>
                    <TextField label="Email" variant="outlined" size="small" />
                </div>
            </div>
            <div >
                <div style={{textAlign:"center"}}>
                <Button type="submit">Submit</Button>
                </div>
                
            </div>
            </form>
           
        </div>
        </>
    )
}
import { Button, TextField } from "@mui/material"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

export default function Verify()
{
    let navigate=useNavigate();
    return(
        <>
        <div style={{textAlign:"center"}} >
            <form>
            <div >
                <Title name="Verify your email" />
            </div>
            <div >
                <div >
                    <TextField label="Enter Email" variant="outlined" size="small" />
                </div>
            </div>
            <div >
                <div >
                    <Button onClick={e=>navigate("/forgotpassword")}  type="submit">Submit</Button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}
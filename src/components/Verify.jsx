import { Button, TextField } from "@mui/material"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

export default function Verify()
{
    let navigate=useNavigate();
    return(
        <>
        <div className="container p-5">
            <form>
            <div className="row">
                <Title name="Verify your email" />
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <TextField label="Enter Email" variant="outlined" size="small" />
                </div>
            </div>
            <div className="row">
                <div className="col-3 offset-5">
                    <Button onClick={e=>navigate("/forgotpassword")}  type="submit">Submit</Button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}
import { Button, TextField } from "@mui/material"
import Title from "./Title"
export default function ForgotPassword()
{
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <Title name="Reset Password" />
            </div>
            <form>
            <div className="row">
                <div className="col-3">
                    <label> EMAIL ADDRESS:</label>
                </div>
                <div className="col-5">
                    <TextField label="Email" variant="outlined" size="small" />
                </div>
            </div>
            <div className="row">
                <div className="col-5 offset-3 p-3">
                <Button type="submit">Submit</Button>
                </div>
                
            </div>
            </form>
           
        </div>
        </>
    )
}
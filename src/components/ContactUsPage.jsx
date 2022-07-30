import { TextField } from "@mui/material"
import {FormControl} from "@mui/material"
import {Button} from "@mui/material"
export default function ContactUsPage()
{
    return(
        <>
        
        <div className="container py-5">
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-4 m-lg-3'>
                            <h3 className='text-center'>CONTACT US</h3>

                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-3">
                            <form>
                                <div className="row p-2">
                                    <FormControl>
                                        <TextField id="outlined-basic" label="your name" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="row p-2">
                                    <FormControl>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="row p-2">
                                    <FormControl>
                                        <TextField id="outlined-basic" label="Subject" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="row p-2">
                                    <TextField
                                        label="Enter your message here"
                                        multiline
                                        rows={3}
                                        maxRows={10}
                                    />
                                </div>
                                <div className="row p-2">
                                    <Button type="submit">Submit</Button>
                                    {/* <Link to="/faq" style={{ color: 'black' }}>Frequently Asked Questions</Link> */}
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
        </>
    )

}
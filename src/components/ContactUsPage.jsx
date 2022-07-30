import { TextField } from "@mui/material"
import {FormControl} from "@mui/material"
import {Button} from "@mui/material"
import Title from "./Title"
export default function ContactUsPage()
{
    return(
        <>
        
        <div >
                    <div >
                        <div>
                            <Title name="CONTACT US" />

                        </div>
                    </div>
                    <div >
                        <div >
                            <form>
                                <div className="contact" >
                                    <FormControl>
                                        <TextField id="outlined-basic" label="your name" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="contact" >
                                    <FormControl>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="contact" >
                                    <FormControl>
                                        <TextField id="outlined-basic" label="Subject" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="contact" >
                                    <TextField
                                        label="Enter your message here"
                                        multiline
                                        rows={3}
                                        maxRows={10}
                                    />
                                </div>
                                <div className="contact" >
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
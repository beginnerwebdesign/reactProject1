import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Title from './Title';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SignUp() {
    return <>

        <div style={{padding:"20px"}} >
            <form>
                <Title name="Sign Up" />
                <div >
                    <div className='signup'>
                        <div >
                            <div >
                                <div >
                                    <label>Email :</label>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" label="Enter your email id" variant="outlined" size='small' />
                                </div>
                            </div>
                            <div >
                                <div >
                                    <label>Password  :</label>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" label="Your Password" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div >
                                <div >
                                    <label>Confirm Password  :</label>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div >
                                <div >
                                    <label>First Name  :</label>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" label="Your first name" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div >
                                <div >
                                    <label>Last Name :</label>
                                </div>
                                <div >
                                    <TextField id="outlined-basic" label="Your last name" variant="outlined" size='small' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='signup'>
                        <div >
                            <div >
                                <label>Gender :</label>
                            </div>
                            <div >
                                <FormControl sx={{ minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="F">Female</MenuItem>
                                        <MenuItem value="M">Male</MenuItem>
                                        <MenuItem value="O">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div >
                            <div >
                                <label>Ancestor  :</label>
                            </div>
                            <div >
                                <FormControl sx={{ minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-helper-label">Ancestor</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Ancestor"
                                    >
                                        <MenuItem value="F">A</MenuItem>
                                        <MenuItem value="M">B</MenuItem>
                                        <MenuItem value="O">C</MenuItem>
                                        <MenuItem value="O">D</MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                        <MenuItem value="O"></MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                        </div>
                        <div >
                            <div >
                                <label>Relation  :</label>
                            </div>
                            <div >
                                <FormControl sx={{ minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-helper-label">Relation</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Ancestor"
                                    >
                                        <MenuItem value="F">Aunt</MenuItem>
                                        <MenuItem value="M">Father</MenuItem>
                                        <MenuItem value="O">Mother</MenuItem>
                                        <MenuItem value="O">Brother-in-law</MenuItem>
                                        <MenuItem value="O">Father-in-law</MenuItem>
                                        <MenuItem value="O">Niece</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>

                        </div>
                        <div >
                            <div >
                                <label>Contact  :</label>
                            </div>
                            <div >
                                <TextField id="outlined-basic" label="Your Phone Number" variant="outlined" size='small' />
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-secondary">Sign Up</button>
                    <div><h6>Already have an account? <Link to='/signin' style={{ 'color': 'black' }}> Login </Link></h6></div>
                </div>


            </form>
        </div>


    </>
}

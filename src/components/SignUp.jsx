import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Title from './Title';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SignUp() {
    return <>
       
            <div className='container'>
                <form>
                    <Title name="Sign Up"/>
                    <div className="row">
                        <div className="col-5">
                            <div className="row align-items-center m-3">
                                <div className="col-5">
                                    <label style={{ fontWeight: "bold" }}>Email :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Enter your email id" variant="outlined" size='small' />
                                </div>
                            </div>
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Password  :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Your Password" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Confirm Password  :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>First Name  :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Your first name" variant="outlined" size='small' />
                                </div>

                            </div>
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Last Name :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Your last name" variant="outlined" size='small' />
                                </div>

                            </div>
                        </div>
                        <div className="col-5 offset-2">
                            <div className="row align-items-center m-3">
                                <div className="col-5">
                                    <label>Gender :</label>
                                </div>
                                <div className="col-7">
                                    <FormControl sx={{minWidth: 120 }} size="small">
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
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Ancestor  :</label>
                                </div>
                                <div className="col-7">
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
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Relation  :</label>
                                </div>
                                <div className="col-7">
                                <FormControl sx={{  minWidth: 120 }} size="small">
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
                            <div className="row align-items-center m-3 ">
                                <div className="col-5">
                                    <label>Contact  :</label>
                                </div>
                                <div className="col-7">
                                    <TextField id="outlined-basic" label="Your Phone Number" variant="outlined" size='small' />
                                </div>

                            </div>
                            
                        </div>
                        <div className='text-center m-lg-3'>
                            <button type="button" className="btn btn-secondary">Sign Up</button>
                            <div><h6>Already have an account? <Link to='/signin' style={{ 'color': 'black' }}> Login </Link></h6></div>
                        </div>
                    </div>

                </form>
            </div>

       
    </>
}

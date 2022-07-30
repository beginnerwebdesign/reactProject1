import Title from "./Title";

export default function AboutUs()
{
    return(
        <>
        
            <div style={{padding:"30px"}}>
                <div className="about">
                    <Title name="About Us" />
                   <p style={{textAlign:"justify",lineHeight:"32px"}}> Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="about" >
                    <Title name="History" />
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="about">
                    <Title name="Heritage" />
                   <p style={{textAlign:"justify",lineHeight:"32px"}}> Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
       
        </>
    )
}
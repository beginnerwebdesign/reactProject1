import Title from "./Title";

export default function AboutUs()
{
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-3 m-4">
                    <Title name="About Us" />
                   <p style={{textAlign:"justify",lineHeight:"32px"}}> Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="col-3 m-4">
                    <Title name="History" />
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="col-3 m-4">
                    <Title name="Heritage" />
                   <p style={{textAlign:"justify",lineHeight:"32px"}}> Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
        </div>
        </>
    )
}
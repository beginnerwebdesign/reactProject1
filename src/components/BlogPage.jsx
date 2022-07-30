import Title from "./Title";

export default function BlogPage()
{
    return(
        <>
            <div style={{padding:"20px"}}>
            <div>
                <Title name="Blog" />
            </div>
            <div className="row align-items-center">
                <div style={{width:"40%"}}>
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>
                    Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>
                <div style={{width:"40%"}} >
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>
                    Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>
            </div>
            </div>
       
        </>
    )
}
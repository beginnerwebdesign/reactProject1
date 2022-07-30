import Title from "./Title";

export default function BlogPage()
{
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <Title name="Blog" />
            </div>
            <div className="row align-items-center">
                <div className="col-6">
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>
                    Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>
                <div className="col-6">
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
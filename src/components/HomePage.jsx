import Title from "./Title"
export default function HomePage()
{
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <Title name="Azkaban" />
                    <p style={{textAlign:"justify",lineHeight:"32px"}}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore
                   eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                </div>
            </div>
        </div>
        </>
    )
}
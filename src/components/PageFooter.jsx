export default function PageFooter() {
    return (
        <footer style={{ 'backgroundColor': "#525b69" }}>
            <div className="container text-white pt-5 pb-5">
                <div className="row">
                    <div className="col-2 p-2">
                      <p>Facebook  <span className=" bi bi-facebook"></span></p> 
                    </div>
                    <div className="col-2 p-2">
                        <p>Instagram<span className="bi bi-instagram"></span></p>
                    </div>
                    <div className="col-2 p-2">
                        <p>Snapchat<i class="bi bi-snapchat"></i></p>
                    </div>
                    <div className="col-2 p-2">
                        <p>Twitter<i class="bi bi-twitter"></i></p>
                    </div>
                    <div className="col-2 p-2">
                       <p>Youtube<i class="bi bi-youtube"></i></p> 
                    </div>


                </div>
            </div>


        </footer>
    )
}
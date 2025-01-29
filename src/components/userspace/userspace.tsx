
import "./userspace.css";

export default function UserSpace(){

    return(
        <>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

        <div className="offcanvas offcanvas-start" style={{width:"12rem"}} data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">User Space</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body" style={{padding:"0rem"}}>
            <div className="offcanvaoption">
            <p >My Stores</p>
            </div>
        </div>
        </div>
        </>
    )
}
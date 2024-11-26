import "./productDescription.css";

export default function ProductDescription(){
    return(


        <div className="product-description">
            <div className="pictures">



            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="./c.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="kjk.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="./c.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="test.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="./c.png" className="d-block w-100" alt="..."/>
            </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>



            </div>


                    <div className="dividor">

                    </div>
                <div className="products-details">
                   
                    <p className="product-name">Apple Watch</p>
                    <p className="description">Best Apple Watch forever order nddddddd dddddd ddddd dd ddddlslsqqqq qqq qqqqqq qp ppppppp pppppp pppaow !</p>
                    <div className="prices">
                    <p className="price-per-elmt">$93838</p>
                    <p className="products-details-discount">$55556</p>
                    </div>
                    <div className="variants-caracteristics">
                    <div className="variants">
                    
                    <p className="variants-section">choose something</p>
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>


                    <p className="variants-section">choose something</p>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Checked checkbox
                    </label>
                    </div>


                    <p className="variants-section">choose something</p>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Default radio
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Default checked radio
                    </label>
                    </div>



                    <p className="variants-section">choose something</p>
                    <div className="input-group mb-3">
                    <input type="file" className=" file-upload" id="inputGroupFile01"/>
                    </div>


                    <p className="variants-section">choose something</p>

                    <div className="mb-3 input-text">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="enter"/>
                    </div>








                    </div>
                    <div className="caracteristics">
                        <h6>Caracteristics</h6>
                        <p><span>color :</span> red bl;ack color best product inas dndnd colordkkd</p>
                        <p><span>width :</span> red bl;ack</p>
                        <p><span>color :</span>  red b red bl;ack color best product inas dndnd colordkkdl;ack color best product inas dndnd colordkkdred bl;ack color best product inas dndnd colordkkd</p>
                        <p><span>color :</span>  red b red bl;ack color best product inas dndnd colordkkdl;ack color best product inas dndnd colordkkdred bl;ack color best product inas dndnd colordkkd</p>
                        <p><span>color :</span>  red b red bl;ack color best product inas dndnd colordkkdl;ack color best product inas dndnd colordkkdred bl;ack color best product inas dndnd colordkkd</p>
                        <p><span>color :</span>  red b red bl;ack color best product inas dndnd colordkkdl;ack color best product inas dndnd colordkkdred bl;ack color best product inas dndnd colordkkd</p>
                        <p><span>color :</span>  red b red bl;ack color best product inas dndnd colordkkdl;ack color best product inas dndnd colordkkdred bl;ack color best product inas dndnd colordkkd</p>


                    </div>


                    </div>
                    <div className="productdetails footer">
                        <p className="total-count">$93838</p>
                        <div className="buttons">
                            <div className="shop-now">
                                <p>Shop Now</p>
                            </div>
                            <div className="add-to-cart">
                                <p>Add TO Cart</p>
                            </div>
                        </div>

                    </div>
                    
                </div>

        </div>
    );
}

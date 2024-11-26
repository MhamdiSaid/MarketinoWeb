import "./addrate.css";
import RatingBar from "../ratingBar/ratingBar";

export default function AddRate(){
    return(
        <div className="add-rate">
            <RatingBar width={15} ratingprop={0} margin={0.9}/>
            <textarea>

            </textarea>
            <div className="rate">
                <p>Add Review</p>
            </div>

        </div>
    )
}
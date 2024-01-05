import {useState} from "react"
import Cards from "./Cards";
import data from "./Content.json"


function Main() {
    const [restaurantList, setRestaurantList] = useState(data);
    function getvalue(e) {
        const inputdata = e.target.value;
        // console.log(inputdata);
        const filteredlist=data.filter((value) =>
            value.name.toLowerCase().includes(inputdata.toLowerCase()));
        // console.log(filteredlist);
        setRestaurantList(filteredlist);
        
    };
    function onRatingChange(e) {
        const ratingchange = e.target.value;
        // console.log(ratingchange)
        const filteredRating = data.filter((rate) => rate.rating >= ratingchange);
        setRestaurantList(filteredRating);
    }
    return (
        <div>
            <div className="inputArea">
            <input className="input Restro" type="text" placeholder="Search restaurants..." onChange={getvalue} />
                <p>Minimum Rating:<span><input className="input Rating" type="number" step="1" min={1} max={5} placeholder="0" onChange={onRatingChange} /></span></p>
            </div>
            <div className="allcards">
            {
                restaurantList.map((value) => {
                    return (
                        <Cards key={value.id.id}{...value}/>
                    )
                })
        }
            </div>
        </div>
    );

}
export default Main;
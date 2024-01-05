function Cards(props) {
    return (
        <div className="individual">
            <div className="topcard">
                < div style={{display:'flex',justifyContent:"space-between"}}>
                <h3>{props.name}</h3>
                <p >{props.rating} <i class="ri-star-fill"></i></p>
                </div>
                <p> <i className="ri-map-pin-line"></i>{props.address}{props.address2}</p>
                <p>{ props.outcode}{props.postcode }</p>
            </div>
            <div className="bottomcard">
                <p><span class="material-symbols-outlined" style={{color:'green'}}>
flatware
                </span>{props.type_of_food}</p>
                <p>Visit Menu</p>
            </div>
        
        </div>
    );
    
}
export default Cards;
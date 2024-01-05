function Header() {
    return (
        <div className="navbar">
            <div className="title">
                <img src="https://flowbite.com/docs/images/logo.svg" />
                <h2>GeekFoods</h2>
            </div>
            <div className="options">
                    <p style={{color:'rgb(29 78 216)'}}>Home</p>
                    <p>Quote</p>
                    <p>Restaurants</p>
                    <p>Foods</p>
                    <p>Contact</p>
            </div>
            <div >
                <button className="button">Get started</button>
            </div>
        </div>
    );
}
export default Header;

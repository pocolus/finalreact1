import { BsFillCartFill } from "react-icons/bs"
import "./Navbar.css"

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
    const { getTotalItems } = useContext(CartContext)
    let totalItems = getTotalItems()

return (
    <div className="barra">
        <Link to="/" style={{fontSize: "40px", color: "darkred", padding:"15px"}}>Scarlata Jewelers</Link>

        <img src="https://res.cloudinary.com/dl9eathxf/image/upload/v1685829721/Scarlata/favicon_wve1zq.png" alt="" size= "30px" width= "70px"/>

        
            <Link to="/category/Anillos" style={{textAlign: "center", padding: "30px",}}>Anillos</Link>
            <Link to= "/category/Relojes" style={{textAlign: "center", padding: "30px", width: "15%"}}>Relojes</Link>
            <Link to= "/category/Brazalete" style={{textAlign: "center", padding:"30px", width: "10%"}}>Brazaletes</Link>
    
        
        <div style= {{position: "relative",  left: "30%"}}>
        <Link to="/carrito">
        <BsFillCartFill size="55px" color="black" />
        <span style= {{position: "absolute"}}>{totalItems}</span>
        </Link>
        </div>
        
    </div>
)
}

export default Navbar



import React from "react";
import './listing.css'
import { Link } from "react-router-dom";


//Importar Imagenes
import img from '../../../assets/alexa.png'
import img2 from '../../../assets/applewatch.png'
import img3 from '../../../assets/seriesx.png'
import img4 from '../../../assets/victus16.png'
import img5 from '../../../assets/user1.jpg'
import img6 from '../../../assets/user2.jpg'
import img7 from '../../../assets/user3.jpg'
import img8 from '../../../assets/user4.jpg'

//Importar Iconos
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";



const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>Mi Listado</h1>
                <Link to={"/Productos"}>
                    <button className="btn flex">
                        Ver todo <BsArrowRightShort className="icon" />
                    </button>
                </Link>
            </div>
            <div className="secContainer flex">
                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Amazon Alexa</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img2} alt="Image Name" />
                    <h3>Apple Watch</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={img3} alt="Image Name" />
                    <h3>Xbox Series X</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img4} alt="Image Name" />
                    <h3>HP Victus 16</h3>
                </div>
            </div>


            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Ventas</h3>
                        <Link to={"/Explorar"}>
                            <button className="btn flex">
                                Ver Todo <BsArrowRightShort className="icon" />
                            </button>
                        </Link>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img5} alt="User Image" />
                            <img src={img6} alt="User Image" />
                            <img src={img7} alt="User Image" />
                            <img src={img8} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                Series X
                                <br />
                                <small>
                                    2000 vendidas <span className="date">2 meses</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Top Vendedor</h3> 
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img6} alt="User Image" />
                            <img src={img5} alt="User Image" />
                            <img src={img8} alt="User Image" />
                            <img src={img7} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                Top 1 Mariana Vasquez
                                <br />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Listing
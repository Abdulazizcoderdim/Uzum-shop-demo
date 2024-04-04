import './Nav.css'
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Nav = ({closeModal}) => {
    return (
        <div className='nav'>
             <div className="nav__container">
                <div className="nav__first">
                    <a href="/">
                     <img width={"45px"} height={"45px"} src="../../../public/UzumLogo.png" alt="Uzum Logo" />
                     <h2>uzum market</h2>
                    </a>
                </div>

                <div className="nav__two">
                    <span className='nav__catalog' onClick={() => closeModal((prev) => !prev)}>Katalog</span> 
                    <span className='nav__search'><input type="text" placeholder='Mahsulotlar va turkumlar izlash'/><p><IoSearch /></p></span>
                </div>

                <div className="nav__third">
                 <p><IoPersonOutline /></p><span>Kirish</span>
                 <p><FaRegHeart /></p><span>Saralangan</span>
                 <p><SlBasket /></p><span>Savat</span>
                </div>
             </div>
        </div>
    );
};

export default Nav;
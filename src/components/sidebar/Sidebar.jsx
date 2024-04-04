import './Sidebar.css'
import { CiLocationOn } from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="sidebar__text">
                <span><CiLocationOn /> </span> Shahar: <a href="#">Toshkent</a>
                </div>
                <div className="sidebar__text sidebar__hover">
                    Topshirish punktlari
                </div>
                <div className="sidebar__third">
                    Buyurtmangizni 1 kunda bepul yetkazib beramiz! 
                </div>
                <div className="sidebar__text-sell">
                    Uzumda soting
                </div>
                <div className="sidebar__text-hover">
                    Savol-javoblar
                </div>
                <div className="sidebar__text-hover">
                    Buyurtmalarim
                </div>
                <div className="sidebar__language">
                    Ozbekcha
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
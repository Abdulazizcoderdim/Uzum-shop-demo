import { Link } from 'react-router-dom';
import './Page.css'

const Pages = ({closeModal}) => {
    return (
        <div className='pages'>
             <div className="pages__container">
                <div className="pages__first">
                  <span>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav1.png" alt="" />
                    <Link to="/mudatlitolov" className='pages__link1' onClick={() => closeModal(true)}>Muddatli to&apos;lov</Link>
                  </span>
                  <span>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav2.png" alt="" />
                    <Link to="/arzonnarxlar" className='pages__link1' onClick={() => closeModal(true)}>Arzon narxlar</Link>
                  </span>
                  <span>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png" alt="" />
                    <Link to="/qurilishvatamirlash" className='pages__link1' onClick={() => closeModal(true)}>Qurilish va tamirlash</Link>
                  </span>
                </div>

                <div className="pages__second">
                   <Link to='/elektronika' className='pages__underline' onClick={() => closeModal(true)}>Elektronika</Link>
                   <p className='pages__underline'>Maishiy texnika</p>
                   <p className='pages__underline'>Kiyim</p>
                   <p className='pages__underline'>Poyabzallar</p>
                   <p className='pages__underline'>Aksessuarlar</p>
                   <p className='pages__underline'>Go&apos;zallik va parvarish</p>
                   <p className='pages__underline'>Salomatlik</p>
                   <p className='pages__second-modal' onClick={() => closeModal((prev) => !prev)}>Yana</p>
                </div>
             </div>
        </div>
    );
};

export default Pages;
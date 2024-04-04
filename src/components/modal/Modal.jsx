import { Link, Route, Routes } from 'react-router-dom';
import './Modal.css'
import Elektronika from '../elektronika/Elektronika';
import MuddatliTolov from '../mudatliTolov/MuddatliTolov';

const Modal = ({closeModal}) => {
    return (
        <div className='modal'>
          <div className="modal__container">
            <div className="modal__routes">
              <Link to='/mudatlitolov' className="modal__route-1">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav1.png"/>
                    <p>Muddatli to&apos;lov</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </Link>
              <a href='/' className="modal__route-1">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav2.png"/>
                    <p>Arzon narxlar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route-1">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Qurilish va tamirlash</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <Link to='/elektronika' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Elektronika</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </Link>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Maishiy texnika</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Kiyim</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Poyabzallar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Aksessuarlar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Go&apos;zallik va parvarish</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Salomatlik</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Uy-ro&apos;zg&apos;or-buyumlari</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Qurilish va tamirlash</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Avtotovarlar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Bolalar tovarlari</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Xobbi va ijod</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Sport va hordiq</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Oziq-ovqat maxsulotlari</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Maishiy kimyoviy moddalar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Kanselyariya tovarlari</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Hayvonlar uchun tovarlar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Kitoblar</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
              <a href='/' className="modal__route">
                <span className='modal__img-text'>
                    <img width={"30xp"} height={"30px"} src="../../../public/nav3.png"/>
                    <p>Dacha, bog&apos; va tomorqa</p>
                </span>
                <span className='modal__gt'>&gt;</span>
              </a>
                   
            </div>

            <div className="modal__routes-second">
                 <Content/>
                <span className='modal__close' onClick={() => closeModal((prev) => !prev)}>✖</span>
            </div>
          </div>
        </div>
    );
};

function Content() {
  return(
    <div>
        <Routes>
          <Route path='/elektronika' element={<div><Elektronika/></div>}/>
          <Route path='/mudatlitolov' element={<div><MuddatliTolov/></div>}/>
        </Routes>
    </div>
  )
}

export default Modal;
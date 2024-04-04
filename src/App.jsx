import './App.css';
import Nav from './components/nav/Nav';
import Pages from './components/pages/Pages';
import Sidebar from './components/sidebar/Sidebar';
import Modal from './components/modal/Modal.jsx';
import { useState } from 'react';
import Slider from './components/slider/Slider.jsx';
import Recomendation from './components/recomendation/Recomendation.jsx';
import Cheap from './components/cheap/Cheap.jsx';

function App() {
  const [closeModal, setCloseModal] = useState(false)
  return (
    <>
      <Sidebar/>
      <Nav closeModal={setCloseModal}/>
      <Pages closeModal={setCloseModal}/>
      {closeModal && <Modal closeModal={setCloseModal}/>}
      <Slider/>
      <Recomendation/>
      <Cheap/>
    </>
  )
}

export default App;
 
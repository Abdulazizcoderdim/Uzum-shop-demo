import './Cheap.css'
import { cheapDb } from './CheapDB';

const cheapDB = cheapDb()

const Cheap = () => {
    return (
        <div className='cheap'>
        <div className="cheap__container">
            <h1>Cheap prices</h1>
            <div className="cheap__models">
                
                {cheapDB.map((modal) => {
                    return(
                    <div className="cheap__model" key={modal.id}>
                    <div className='cheap__img'>
                     <img width={"250px"} height={'340px'} src='../../../public/slider1.png' alt="" />
                    </div>
                    <p>{modal.title}</p>
                    <span className='cheap__star'>{modal.cheap__star}</span>
                    <span className='cheap__time'>{modal.cheap__time}</span>
                    <span className='cheap__sum'>{modal.cheap__sum}</span>
                    <span className='cheap__sum-old'>{modal.cheap__sumold}</span>
                    <div className='cheap__cart-sum'>
                     <span className='cheap__main-sum'>{modal.cheap__mainsum}</span>
                     <span className='cheap__cart'>💟</span>  
                    </div>
                    </div> 
                    )
                })}

            </div>
        </div>
    </div>
    );
};

export default Cheap;
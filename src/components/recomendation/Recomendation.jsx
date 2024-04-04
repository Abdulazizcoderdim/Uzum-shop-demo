import './Recomendation.css'
import { getData } from './Recom';

const modals = getData();


const Recomendation = () => {
    return (
        <div className='recom'>
            <div className="recom__container">
                <h1>Recomendation</h1>
                <div className="recom__models">
                    
                    {modals.map((modal) => {
                        return(
                        <div className="recom__model" key={modal.id}>
                        <div className='recom__img'>
                         <img width={"250px"} height={'340px'} src='../../../public/slider1.png' alt="" />
                        </div>
                        <p>{modal.title}</p>
                        <span className='recom__star'>{modal.recom__star}</span>
                        <span className='recom__time'>{modal.recom__time}</span>
                        <span className='recom__sum'>{modal.recom__sum}</span>
                        <span className='recom__sum-old'>{modal.recom__sumold}</span>
                        <div className='recom__cart-sum'>
                         <span className='recom__main-sum'>{modal.recom__mainsum}</span>
                         <span className='recom__cart'>💟</span>  
                        </div>
                        </div> 
                        )
                    })}
                    
                    
                    {/* */}
                      
                      <button>Yana Maxsulot 20</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Recomendation;


{/* <span className='recom__heart'><FaRegHeart/></span> */}
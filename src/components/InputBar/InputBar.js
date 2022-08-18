import './InputBar.scss';

function InputBar({placeholder, icon, alt, name}) {
 return (
    <div className="inputBar">
        
            <img className='inputBar__icon' src={icon} alt={alt}/>
            <input type="text"className="inputBar__input" placeholder={placeholder} name={name}/>
       
    </div>
 )
}
export default InputBar;
import './Button.scss';


function Button ({icon, alt, text, className}) {
    return(
        <button className={className}><img src={icon} className="button-icon" alt={alt} />{text}</button>
    )
}
export default Button;
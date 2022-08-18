import './Button.scss';


function Button ({icon, alt, text}) {
    return(
        <button className="button"><img src={icon} className="header__button--icon" alt={alt} />{text}</button>
    )
}
export default Button;
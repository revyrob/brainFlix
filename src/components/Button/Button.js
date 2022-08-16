import './Button.scss';


function Button (props) {
    return(
        <button className="button"><img src={props.icon} className="header__button--icon" alt={props.alt} />{props.text}</button>
    )
}
export default Button;
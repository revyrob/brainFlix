import './Header.scss';
import logoIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';



function Header () {
    return (
      <header class="header">
        <img src={logoIcon} className="header__logo" alt="logo" />
      <nav class="header__nav">
        <input className='header__search' placeholder="🔍 Search"></input>
     
      <button className="header__button"><img src={uploadIcon} className="header__button--icon" alt="upload-icon" /> UPLOAD</button>
      <img src={user} className="header__user" alt="user photo" />
      </nav>
    </header>
    );
}
export default Header;

import './Header.scss';
import Button from '../Button/Button';
import logoIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';



function Header () {
    return (
      <header class="header">
        <img src={logoIcon} className="header__logo" alt="Brainflix logo" />
      <nav class="header__nav">
        <input className='header__search' placeholder="🔍 Search"></input>
       <Button className='header__button' icon={uploadIcon} alt="upload icon" text="UPLOAD"/>
      <img src={user} className="header__user" alt="user" />
      </nav>
    </header>
    );
}
export default Header;

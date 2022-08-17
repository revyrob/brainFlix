import search from '../../assets/Icons/search.svg'
import './SearchBar.scss';

function SearchBar() {
 return (
    <div className="searchbar">
        
            <img src={search} className='searchbar__icon' />
            <input type="text" placeholder="Search" className="search__input" />
       
    </div>
 )
}
export default SearchBar;
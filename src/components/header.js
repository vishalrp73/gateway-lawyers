import logo from '../img/logo.png';
import caret_right from '../img/caret_right.png';
import './header.css';

const Header = () => {

    return (
        <div className = 'header-wrapper'>
            <div className = 'address-wrap'>
                <img src = { logo } id = 'gateway-logo' />
                <p id = 'header-address'>2 Bishop Dunn Place, Flat Bush, Auckland 2013</p>
            </div>

            <div className = 'phone-wrapper'>
                <p id = 'phone-text'>PH: (09) 282 3920</p>
            <img id = 'chevron-right' src = { caret_right } onClick = "#" style ={{ cursor: 'pointer'}}/>
            </div>
        </div>
    )
}

export default Header;
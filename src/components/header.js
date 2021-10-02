import logo from '../img/logo.png';
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
            </div>
        </div>
    )
}

export default Header;
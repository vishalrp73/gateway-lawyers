import logo from '../img/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <div className = 'footer-wrapper'>
            <img id = 'footer-logo' src = { logo } />

            <p>&copy; 2021 Gateway Lawyers</p>
        </div>
    )
}

export default Footer;
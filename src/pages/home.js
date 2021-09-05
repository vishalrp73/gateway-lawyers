import './pageCSS/home.css';
import ReactSlides from '../components/react-slides/react-slides';
import Slideshow from '../components/slideshow/slideshow';

const Home = () => {
    return (
        <div className = 'home-wrapper'>
            <p className = 'home-text'>
                Gateway Lawyers are deeply committed to understanding our clients' legal,
                personal and business needs. We offer our clients a professional yet friendly,
                well informed representation based on their specific requirements. This enables
                clients to leave the worry and stress of their issues to the professionals to
                resolve. Every matter remains fully confidential at all times.
            </p>

            <Slideshow />
        </div>
    )
}

export default Home;
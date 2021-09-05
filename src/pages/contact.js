import contact_img from '../img/contact-stitch.jpg';
import './pageCSS/contact.css'

const Contact = () => {
    return (
        <div className = 'contact-wrapper'>
            <h1>Location</h1>

            <div className = 'location-wrapper'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.0871075871937!2d174.9033662149856!3d-36.959976398196275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4c66d7fcd8db%3A0xeb1529de0eee95f4!2sGateway%20Lawyers%20NZ!5e0!3m2!1sen!2snz!4v1629260653379!5m2!1sen!2snz" 
                    width="400" height="300" allowfullscreen="" loading="lazy" />
                
                <ul className = 'location-text'>
                    <li>Suite 21</li>
                    <li>2 Bishop Dunn Place</li>
                    <li>Flat Bush</li>
                    <li>PO BOX 58777</li>
                    <li>Botany</li>
                    <li>Auckland 2163</li>
                    <br />
                    <li>PH: (09) 282 3920</li>
                    <li>FAX: (09) 320 0556</li>
                    <li>E: admin@gatewaylawyers.co.nz</li>
                </ul>
            </div>

            <img src = { contact_img } id = 'contact-img' />

            <form>
            <h4>Send Us a Message</h4>
                <div className = 'form-wrapper'>
                    <div className = 'left-box'>
                        <input className = 'left-input' type = 'text' placeholder = 'Name *' />
                        <input className = 'left-input' type = 'email' placeholder = 'Email *' />
                        <input className = 'left-input' type = 'text' placeholder = 'Subject' />
                    </div>
                    <div className = 'right-box'>
                        <input className = 'right-input' type = 'text' placeholder = 'Message' />
                    </div>                   

                </div>
                <input type = 'button' value = 'Send' className = 'send-btn' />

            </form>
        </div>
    )
}

export default Contact;
import './pageCSS/gateAcc.css';
import './pageCSS/contact.css';
import contact_img from '../img/contact-stitch.jpg';

const GatewayAccounting = () => {
    return (
        
        <div className = 'gate-acc-wrapper'>

        <p className = 'gate-acc-text'>
                Experienced Chartered Accountant in Auckland, providing expert accounting and tax services, here to help business oweners succeed
                by saving time and making money.
        </p>

        <h1>Location</h1>

            <div className = 'location-wrapper'>

                <div className = 'iframe-container'>
                    <iframe
                        src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.0871075871937!2d174.9033662149856!3d-36.959976398196275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4c66d7fcd8db%3A0xeb1529de0eee95f4!2sGateway%20Lawyers%20NZ!5e0!3m2!1sen!2snz!4v1629260653379!5m2!1sen!2snz'
                        allowfullscreen = '' loading = 'lazy'
                        className = 'iframe'
                     />
                </div>
                

                <p className = 'location-text' id = 'resp_location-text'>
                    Suite 21<br />
                    2 Bishop Dunn Place<br/>
                    Flat Bush<br />
                    PO BOX 58777<br />
                    Botany<br />
                    Auckland 2163<br />
                    <br />
                    PH: (09) 282 3920<br />
                    FAX: (09) 320 0556<br />
                    E: admin@gatewaylawyers.co.nz
                </p>

            </div>

                <img src = { contact_img } id = 'contact-img' />

                <h5 className = 'send-us-text'>Send us a message!</h5>

                <div className = 'input-wrapper'>

                    <div className = 'left-bar'>
                        <input type = 'text' className = 'left-input' placeholder = 'Name *' />
                        <input type = 'text' className = 'left-input' placeholder = 'Email *' />
                        <input type = 'text' className = 'left-input' placeholder = 'Subject' />
                    </div>

                    <div className = 'right-bar'>
                        <textarea className = 'message-text' />
                        <input type = 'button' className = 'submit-btn-acc' value = 'Send' />
                    </div>



                </div>





        </div>


    )
}

export default GatewayAccounting;
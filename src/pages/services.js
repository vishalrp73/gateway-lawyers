import './pageCSS/services.css';

import res_com from '../img/services/property-icon.jpg';
import trusts from '../img/services/trusts-icon.jpg';
import family from '../img/services/family-icon.jpg';

const Services = () => {
    return (
        <div className = 'services-wrapper' id = 'resp_services-wrapper'>
            
            
            <div className = 'service-box' id = 'resp_services-box'>
                <img className = 'service-img' src = { res_com } />
                <h3 className = 'service-title'>Residential &amp; Commercial</h3>
                <p className = 'service-brief'>Full residential / commercial property services including:</p>
                <ul className = 'service-list'>
                    <li>Finance and refinancing</li>
                    <li>Sale and purchases of residential properties</li>
                    <li>Due diligence</li>
                    <li>Residential tenancy matters</li>
                    <li>Pre-auction reports</li>
                    <li>Commercial leasing</li>
                    <li>Dispute resolution</li>
                    <li>Development projects</li>
                    <li>Subdivisions</li>
                    <li>Mortgages</li>
                </ul>
            </div>

            <div className = 'service-box' id = 'resp_services-box'>
                <img className = 'service-img' src = { trusts } />
                <h3 className = 'service-title'>Trusts &amp; Wills</h3>
                <p className = 'service-brief'>We offer personalised and cost effective advice on managing
                    and protecting your assets</p>
                <ul className = 'service-list'>
                    <li>Trusts</li>
                    <li>Estate administration</li>
                    <li>Wills</li>
                    <li>Powers of Attorney</li>
                    <li>Disputes relating to wills</li>
                </ul>
            </div>

            <div className = 'service-box' id = 'resp_services-box'>
                <img className = 'service-img' src = { family } />
                <h3 className = 'service-title'>Family Law</h3>
                <p className = 'service-brief'>We offer compassionate and timely advice on the following:</p>
                <ul className = 'service-list'>
                    <li>Separation process</li>
                    <li>Divorce / Dissolution</li>
                    <li>Parenting / Contact Orders</li>
                    <li>Relocation</li>
                    <li>Spousal maintenance and child support</li>
                    <li>Care of children including parenting agreements</li>
                </ul>
            </div>




        </div>
    )
}

export default Services;
import './pageCSS/our_prof.css';
import { useState, useEffect } from 'react';

import profiles from '../doc/profiles.json';

const OurProfile = () => {

    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(profiles)
    }, [])

    console.log(profiles)


    return (
        <div className = 'profiles-wrapper' >
            { prof.map(profile => (
                <div className = 'prof-container'>
                    <img src = { profile.photo } className = 'prof-photo' />

                    <div className = 'info-container'>
                        <h1 className = 'name-text' id = 'resp_name-text'>{ profile.first_name } { profile.last_name }</h1>
                        <h2 className = 'title-text' id = 'resp_title-text'>{ profile.title }</h2>
                        <h2 className = 'certs-text' id = 'resp_certs-text'>{ profile.certs }</h2>
                        <p className = 'landline-text' id = 'resp_landline-text'>{ profile.landline ? `PH: ${profile.landline}` : <></> }</p>
                        <p className = 'mob-text' id = 'resp_mob-text'>{ profile.mobile ? `MOB: ${profile.mobile}` : <></> }</p>
                        <p className = 'email-text' id = 'resp_email-text'>E: { profile.email }</p>
                        <p className = 'bio-text' id = 'resp_bio-text'>{ profile.bio }</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurProfile;
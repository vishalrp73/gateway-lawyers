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
        <div className = 'profiles-wrapper'>
            { prof.map(profile => (
                <div className = 'prof-container'>
                    <img src = { profile.photo } className = 'prof-photo' />

                    <div className = 'info-container'>
                        <h1 className = 'name-text'>{ profile.first_name } { profile.last_name }</h1>
                        <h2 className = 'title-text'>{ profile.title }</h2>
                        <h2 className = 'certs-text'>{ profile.certs }</h2>
                        <p className = 'landline-text'>PH: { profile.landline }</p>
                        <p className = 'mob-text'>MOB: { profile.mobile }</p>
                        <p className = 'email-text'>E: { profile.email }</p>
                        <p className = 'bio-text'>{ profile.bio }</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurProfile;
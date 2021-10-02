import './slideshow.css';

import React, { useState, useEffect } from 'react';

const images = [
        "https://gateway-lawyers.s3.ap-southeast-2.amazonaws.com/slides/table.jpg",
        "https://gateway-lawyers.s3.ap-southeast-2.amazonaws.com/slides/degrees.jpg",
        "https://gateway-lawyers.s3.ap-southeast-2.amazonaws.com/slides/exterior.jpg"
    ]

const imgText = [
    "New Zealand and Australian Legal Services",
    `Property & Commercial law Trusts, Wills and Family Law`,
    "We offer compassionate, timely and personalised advice"
]
const delay = 5000;

const Slideshow = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    const resetTimeout =() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1), delay );
        return () => {
            resetTimeout();
        }
    }, [index]);



    return (
        <div className = 'slide-wrapper'>

            <div className = 'slideshow-slider' style = {{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                
                { images.map((bImg, index) => (
                    <div className = 'slide' key = {index} style = {{ backgroundImage: `url(${bImg})` }}>
                        <p className = 'slide-text' id = 'resp_slide-text'>{imgText[index]}</p>
                    </div>
                ))}

            </div>

            <div className = 'slide-dots'>
                { images.map((_, idx) => (
                    <div key = {idx} className = {`slideshowDot${index === idx ? " active" : ""}`} onClick = {() => {setIndex(idx)}} />
                ))}
            </div>
        
        
        
        
        </div>
    )
}

export default Slideshow;
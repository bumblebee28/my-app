import React, { useState } from 'react'

export default function About(props) {
    const mystyle = {
        backgroundColor: "rgba(10, 10, 73, 0.733)",
        width: '24rem',
        boxShadow: `10px 15px 5px ${props.mode === 'dark' ? 'black' : 'lightgrey'}`,
        border: '2px solid darkgrey',
        padding: '15px 0 0 0',
        color: 'white'
    }

    const icons = {
        display: 'inline',
        width: '50px',
    }
    const [wobble, setWobble] = useState(0);
    return (
        <>
        
            <div className="card container my-3" style={mystyle}>
                <p style={{ fontSize: '40px', fontFamily: 'revert', textAlign: 'center' }}>BEHIND THE SITE</p>
                <img src="https://img.icons8.com/doodle/1000/user-female-red-hair.png" className="card-img-top container" alt="..." style={{ width: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }}>Harshita Pal</h5>
                    <p style={{ textAlign: 'center', font: 'caption', color: 'lightblue' }}>(UI designer || Full-Stack Developer)</p>
                    <br />
                    <strong>Social Media Handles:</strong>
                </div>
                <div className="container mx-5 mb-3">
                    <span style={icons}>

                        <a href="https://twitter.com/HarshitaPal18" className="mx-5"><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" onMouseEnter={() => setWobble(1)}
                            onAnimationEnd={() => setWobble(0)}
                            wobble={wobble}
                        /></a>

                        <a href="https://www.linkedin.com/in/harshita-pal-1848751bb/" className="mx-1"><img src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"
                        /></a>
                    </span>
                </div>
                

            </div>
            
        </>
    )
}

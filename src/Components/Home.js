import React from 'react'
import img1 from '../Images/Vector 1.png'
import img2 from '../Images/Rectangle 400.png'
import img10 from '../Images/Screenshot_669 1.png'

import './home.css'

const Home = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row shree'>
                    <div className='col-lg-6' style={{ textAlign: "left", paddingLeft: "100px" }} >
                        <img className='img10' alt='' src={img10} />
                        <div className='main'>
                            <h1 className='txt'>Discover the <br /><span>Best</span> Food <br />and Drinks</h1>
                            <p className='prg'>Naturally made Healthcare Products for the
                                <br /> better care & support of your body.</p>
                            <button className="button button1" style={{ borderRadius: "30px" }}>Explore Now!</button>
                        </div>


                    </div>
                    <div className='col-lg-6'>
                        <img src={img2} alt='' className='img2'></img>
                        <button className="topbtn" style={{ borderRadius: "30px" }}>Get In Touch</button>
                        <img src={img1} alt='' className='img1'></img>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home

import React from 'react'
import img3 from '../Images/pharmasict-serving-customer-drug-store 1.png'
import './about.css'
const About = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 mt5 bg-light '>
                        <img src={img3} alt='' className='mgp' />
                    </div>
                    <div className='col-lg-6 mt5 bg-light' style={{ textAlign: "justify" }}>
                        <h1 className='abty f1'>About Us</h1>
                        <p className='graph'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. t has survived not only five centuries.</p>
                        <button className="button button1 btn1" style={{ borderRadius: "30px" }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About

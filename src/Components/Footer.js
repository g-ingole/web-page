import React from 'react'
import './footer.css'
import img9 from '../Images/Screenshot_669 2.png'
const Footer = () => {
    return (
        <div>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-lg-3 mt5'>
                        <img src={img9} alt=''></img>
                    </div>
                    <div className='col-lg-3 mt5'>
                        <h5 className='foot-head'>Contact Us</h5>
                        <p className='crl'>
                            Lorem Ipsum Pvt Ltd.5/1, Magalton <br />
                            Road,Phartosh Gate near YTM <br />
                            Market, XYZ-343434<br /><br />
                            example2020@gmail.com<br /><br />
                            (904) 443-0343
                        </p>
                    </div>
                    <div className='col-lg-3 mt5'>
                        <h5 className='foot-head'>More</h5>
                        <p className='crl'>
                            About Us <br /><br />
                            Products<br /><br />
                            career<br /><br />
                            Contact Us
                        </p>
                    </div>
                    <div className='col-lg-3 mt5 '>
                        <h5 className='foot-head socil'>Social Links</h5>
                        <div className='foot-head kkb' style={{ justifyContent: "space-between" }}>
                            <i className="fa-brands fa-instagram" style={{ border: "none", fontSize: "30px" }}></i>
                            <i className="fa-brands fa-twitter" style={{ border: "none", fontSize: "30px" }}></i>
                            <i className="fa-brands fa-facebook-f" style={{ border: "none", fontSize: "30px" }}></i>
                            <p className='mkt kkbb'>© 2022 Food Truck Example </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import seller from './assets/man-shopping-supermarket/suitcase.svg'
import gift from './assets/man-shopping-supermarket/gift.svg'
import star from './assets/man-shopping-supermarket/start.svg'
import help from './assets/man-shopping-supermarket/quest.svg'


function Footer() {
    return (
        <div className='footercontainer mt-5'>



            <div className='footer'>

                <div className='footerlist'>
                    <div>ABOUT</div>

                    <p>Contact us</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Flikart Stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Corporate Information</p>
                </div>

                <div className='footerlist'>
                    <div>HELP</div>
                    <p>Payments</p>
                    <p>Shipping</p>
                    <p>Cancellation & Return</p>
                    <p>FAQ</p>
                    <p>Report Infringement</p>
                </div>


                <div className='footerlist'>
                    <div>CONSUMER POLICY</div>
                    <p>Return Policy</p>
                    <p>Terms Of Use</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                    <p>Grievance Redressal</p>
                    <p>EPR Compliance</p>
                </div>
                <div className='footerlist'>
                    <div>SOCIAL</div>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>YouTube</p>

                </div>

                <div className='footerryt'>

                    <div className='footerlist mailus leftborder' >
                        <div>Mail Us:</div>
                        <p>Flipkart Internet Private Limited,</p>
                        <p>Buildings Alyssa, Begonia &</p>
                        <p>Clove Embassy Tech Village,</p>
                        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p>Bengaluru, 560103,</p>
                        <p>Karnataka, India</p>
                    </div>
                    <div className='footerlist mailus' >
                        <div>Registered Office Address:</div>
                        <p>,Flipkart Internet Private Limited, <br />

                            Buildings Alyssa, Begonia & <br />

                            Clove Embassy Tech Village,<br />

                            Outer Ring Road, Devarabeesanahalli Village,<br />

                            Bengaluru, 560103,<br />

                            Karnataka, India <br />

                            CIN : U51109KA2012PTC066107 <br />

                            Telephone: <a href="" style={{ textDecoration: "none" }}>044-45614700</a> </p>

                    </div>
                </div>
            </div>

            <div className='footerbottom'>
                <div>
                    <img src={seller} alt="" />
                    <a href=""> Become a Seller</a>
                </div>
                <div>
                    <img src={star} alt="" />
                    <a href=""> Advertise</a>
                </div>
                <div>
                    <img src={gift} alt="" />
                    <a href=""> Gift Cards</a>
                </div>
                <div>
                    <img src={help} alt="" />
                    <a href=""> Help Center</a>
                </div>
             
                <div>
                 <span style={{color:'white'}}>© 2007-2023 Flipkart.com</span> 
                </div>

                <div>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
                </div>




            </div>


        </div>
    )
}

export default Footer
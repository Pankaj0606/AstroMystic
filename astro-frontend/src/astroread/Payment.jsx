import React from 'react';
import './Payment.css'; // Import the CSS file for styling
import image1 from "../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg"

const Payment = () => {
    return (
        <div className="payment-container">
            {/* Heading */}
            <h1 className="payment-title">Payment Information</h1>

            {/* Circular Image */}
            <img src={image1} alt="Astrology" className="payment-image" />

            {/* Payment Information */}
            <div className="payment-details">
                <h3>NOTE - FEES IS NON REFUNDABLE SO THINK BEFORE PAYMENT.</h3>
                <br />

                <h3>Bank Account Details</h3>
                <p>Name - Shivangi Banka </p>
                <p>Account no. 40254486456</p>
                <p>IFSC - SBIN0007216</p>
                <p>CIF Number - 90772899836</p>
                <p>Swift code - SBININBB</p>
                <br />

                <p>Google Pay/ Phone Pay/ Paytm - +919599316995</p>
                <br />

                <p>You can email me the details after payment @ <a href="mailto:sheviastrology@gmail.com">sheviastrology@gmail.com</a></p>
                
            </div>
        </div>
    );
};

export default Payment;

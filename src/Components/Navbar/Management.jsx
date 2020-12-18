import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import "./Mangement.css"

import dog_4 from "../../images/dog_4.jpg"
import dog_9 from "../../images/dog_9.jpg"
import dog_29 from "../../images/dog_29.jpg"

function Management() {
    return (
        <div className="team-section">
            <div className="inner-width">
                <h1>Meet Our Team</h1>
                <div className="pers">
                <div className="pe">
                    <img src={dog_4} alt="dog" />
                    <div className="p-name">Ben Mendy</div>
                    <div className="p-des">Co-ordinator</div>
                    <div className="p-sm">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                <div className="pe">
                    <img src={dog_9} alt="dog" />
                    <div className="p-name">Anna Bell</div>
                    <div className="p-des">Head Of Transfers</div>
                    <div className="p-sm">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                <div className="pe">
                    <img src={dog_29} alt="dog" />
                    <div className="p-name">George Gates</div>
                    <div className="p-des">CEO</div>
                    <div className="p-sm">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Management;

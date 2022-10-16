import React, {useState} from "react";

import {
    contentContainer,
    footerContainer,
    socialContainer,
    footerImage,
} from ".../styles/footerStyle";

/* TODO: Add these into the file!
import githubImage from "../assets/images/github";
import linkedinImage from "../assets/images/linkedin";
import emailImage from "../assets/images/email";
*/

export default function Footer() {

    return (
        <footerContainer>
            <contentContainer>
                <socialContainer>
                    <a href= "https://www.linkedin.com/in/hannah-stampke-802a62189/" target="_blank" rel= "norefferer">
                        <footerImage src= {linkedin}></footerImage>
                    </a>
                    <a href= "https://github.com/HannahStampke" target="_blank" rel= "norefferer">
                        <footerImage src= {github}></footerImage>
                    </a>
                    <a href= "mailto:hannah.stampke@gmail.com" target="_blank" rel= "norefferer">
                        <footerImage src= {email}></footerImage>
                    </a>
                </socialContainer>
            </contentContainer>
        </footerContainer>
    );
}
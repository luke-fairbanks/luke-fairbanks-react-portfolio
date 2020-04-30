import React from "react";
import profilePicture from "../../../static/assets/images/auth/luke-face.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
            <div className="right-column"> 
                what up my name is luke fairbanks im 16 years old and i created this website. i live in utah and i play on my highschools soccer team. i take interest in physcics and astronomy in school and i very much enjoy procrastinating. life is good here and i hope one day i can get a gnarly job coding some cool stuff.
            </div>
        </div>
    )
}
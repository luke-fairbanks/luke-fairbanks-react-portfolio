import React from "react";
import profilePicture from "../../../static/assets/images/bio/luke-face.jpg"

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Amet volutpat consequat mauris nunc congue. Tellus elementum sagittis vitae et leo duis ut. Fringilla est ullamcorper eget nulla. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Elit duis tristique sollicitudin nibh. Viverra justo nec ultrices dui. Egestas sed sed risus pretium quam. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Habitant morbi tristique senectus et netus et malesuada. At urna condimentum mattis pellentesque id nibh. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
            </div>
        </div>
    )
}
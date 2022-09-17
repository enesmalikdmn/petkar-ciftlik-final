import React from "react";

const SocialLinks = ({className = ''}) => {
    return (
        <ul className={className}>
            <li>
                                <a href="https://www.facebook.com" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="bx bxl-youtube"></i>
                                </a>
                            </li> */}
                            <li>
                                <a href="https://instagram.com" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                            
                        </ul>

    )
}

export default SocialLinks;
import React from 'react';

const HelpingChildren = ({data}) => {
    return (
        <div className="about-area two ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/img/cocuk_foto.png" alt="Image" />

                            {/* <div className="shape-1">
                                <img src="/img/about-two/about-two-shape2.png" alt="Image" />
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            {/* <span className="top-title">About Corona</span> */}
                            <h2 style={{color: '#f19d3d'}}>{data.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: data.content}}></div>

                            {/* <ul>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Clean and disinfect frequently touched surfaces
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Avoid touching your eyes, nose, and mouth
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Clean your hands with a hand sanitizer
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Cover coughs and sneezes
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Stay home if you’re sick
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Wear a facemask if sick
                                </li>
                                <li>
                                    <i className="flaticon-tick"></i>
                                    Cover your mouth and nose
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HelpingChildren;
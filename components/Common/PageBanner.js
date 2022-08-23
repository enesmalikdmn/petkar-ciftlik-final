import React from 'react';
import Link from 'next/link';

const PageBanner = ({ pageTitle, postHeader, homePageUrl, homePageText, activePageText, imgClass, imgUrl }) => {
    return (
        <div className={`page-title-area ${imgClass}`} style={{ backgroundImage: `url("${imgUrl}")`, backgroundSize: 200 }}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2 dangerouslySetInnerHTML={{__html: postHeader?.length > 0 ? postHeader[0] : pageTitle}}></h2>
                            <h3 dangerouslySetInnerHTML={{__html: postHeader?.length > 1 ? postHeader[1] : ''}}></h3>
                            <h3 dangerouslySetInnerHTML={{__html: postHeader?.length > 2 ? postHeader[2] : ''}}></h3>
                            <ul>
                                <li>
                                <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li className="active">{activePageText}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
import React from 'react';
import Link from 'next/link';

const PageBanner = ({ pageTitle, postHeader, homePageUrl, homePageText, activePageText, imgClass, imgUrl }) => {
    return (
        <div className={`page-title-area ${imgClass}`} style={{ backgroundImage: `url("${imgUrl}")`, marginTop: '4rem', backgroundSize: 200 }}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Petkar İle de France Damızlık Çiftliği</h2>
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
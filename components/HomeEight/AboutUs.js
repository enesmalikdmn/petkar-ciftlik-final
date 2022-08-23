import React from 'react';
import Link from 'next/link';
import r from '../../utils/removeHTML'

const AboutUs = ({data}) => {
    return (      
        <div className="about-area-seven">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<h2>{r(data.title)}</h2>
							<p>{r(data.content)}</p>

							<div className="about-btn">
                                <Link href="/about">
                                    <a className="default-btn">
                                        About Us
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6">
								<div className="about-img-1"></div>
							</div>
							<div className="col-lg-6">
								<div className="row">
									<div className="col-lg-12">
										<div className="about-img mb-30">
											<img src="/img/home-eight/home-eight-about2.jpg" alt="Image" />
										</div>
									</div>
									<div className="col-lg-12">
										<div className="about-img">
											<img src="/img/home-eight/home-eight-about3.jpg" alt="Image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUs;
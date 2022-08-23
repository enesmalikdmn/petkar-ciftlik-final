import React from 'react';
import Link from 'next/link';
import r, { removeTable } from '../../utils/removeHTML'

const OurServices = ({services, data}) => {
	return (
		<div className="services-area-three pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					{/* <span className="top-title">Our Services</span> */}
					<h2>{data.title}</h2>
					<p><div dangerouslySetInnerHTML={{__html: r(removeTable(data.content, '')).slice(0,140)}}></div></p>
				</div>

				<div className="row">
					{
						services.map((service, index) => (
							<div key={service.title + index} className="col-lg-4 col-sm-6">
								<div className="single-services">
									<span className="flaticon-man"></span>
									<h3>{service.title}</h3>
									<div dangerouslySetInnerHTML={{__html: service.miniContent}}></div>

									<Link href={`/service/${service.slug}`}>
										<a className="read-more">
											Read More <i className="bx bx-plus"></i>
										</a>
									</Link>

									<div className="services-shape">
										<img src="/img/services-card-shape.png" alt="Image" />
									</div>
								</div>
							</div>

						))
					}
					{/* <div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-man"></span>
							<h3>Cancer Service</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-liver"></span>
							<h3>Liver Transport</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-kidney"></span>
							<h3>Kidney Transport</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-heart"></span>
							<h3>Cardiac Arrhythmia</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-brain"></span>
							<h3>Neurology Care</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-walker"></span>
							<h3>Orthopedic Care</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
								<a className="read-more">
									Read More <i className="bx bx-plus"></i>
								</a>
							</Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div> */}
				</div>
			</div>

			{/* <div className="shape-1"> TODO: logo gelecek
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-2">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-3">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div>
			<div className="shape-4">
				<img src="/img/prevention-shape-1.png" alt="Image" />
			</div> */}
		</div>
	)
}

export default OurServices;
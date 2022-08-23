import React from 'react';
import ContactInfo from '../../content/constants';

const WeCareAboutYou = ({data}) => {
    return (      
        <div className="emergency-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="emergency-content ptb-100">
							<h2>{data.title}</h2>
							<p dangerouslySetInnerHTML={{__html: data.content}}></p>

							{/* <ul>
								<li className="active">
									<i className="bx bx-phone-call"></i>
									
									<h3 className='mt-3'><a href={ContactInfo.phoneHref}>{ContactInfo.phone}</a></h3>
								</li>

								<li>
									<i className="bx bx-envelope"></i>
									
									<h3 className='mt-3'><a href={ContactInfo.emailHref}>{ContactInfo.email}</a></h3>
								</li>
							</ul> */}
						</div>
					</div>

					<div className="col-lg-6 pr-0">
						<div className="emergency-img"></div>
					</div>
				</div>
			</div>

			<div className="shape">
				<img src="/img/shape/emergency-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default WeCareAboutYou;
import React from 'react'; 
import ContactContent from '../../content/contact-content';
import {default as ConstInfo} from '../../content/constants';
import { useRouter } from 'next/router';
const ContactInfo = () => {
	const {locale} = useRouter();
    return (      
        <div className="contact-info-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3>İzmir</h3>
							<p>{ConstInfo.address}</p>
							<span>{ContactContent[locale].email}: {ConstInfo.email}</span>	
							<span>{ContactContent[locale].phone}: {ConstInfo.phone}</span>	
						</div>
					</div>

					<div className="col-lg-6 p-0">
						<div className="single-contact-map">
							<iframe src="https://maps.google.com/maps?q=38.0993669,%2027.5438436&t=k&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
						</div>
					</div>

					
				</div>
			</div>
		</div>
    )
}

export default ContactInfo;
/*
<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=38.428716,%2027.233641&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google map code</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
*/
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import r from '../../utils/removeHTML'
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:false,
    margin:0,
    nav:true,
    mouseDrag: false,
    items:1,
    dots: false,
    autoplay: false,
    smartSpeed:800,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
};


const MainBanner = ({data}) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (      
        <div className="hero-slider-area hero-slider-area-eight">
            {display ? <OwlCarousel 
                className="hero-slider-wrap-eight owl-carousel owl-theme"
                {...options}
            >  
				<div className="slider-item slider-item-bg-6">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="slider-text one">
									{/* <span className="top-title">Welcome To Corf</span> */}
									<h1>{r(data.title)}</h1>
									<p>{r(data.content)}</p>

									<div className="slider-btn">
                                        <Link href="/benefits-of-choosing-us">
                                            <a className="default-btn">
                                                Learn More
                                            </a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="slider-item slider-item-bg-7">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="slider-text two">
									<span className="top-title">Welcome To Corf</span>
									<h1>Our Smiles Speak Themselves</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis.</p>
									
									<div className="slider-btn">
                                        <Link href="/appointment">
                                            <a className="default-btn">
                                                Book An Appointment
                                            </a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
            </OwlCarousel> : ''}
		</div>
    )   
}

export default MainBanner;
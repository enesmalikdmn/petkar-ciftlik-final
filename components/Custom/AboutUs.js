import React from 'react';
import Link from 'next/link';
const ModalVideo = dynamic(() => import('react-modal-video'), {
	ssr: false
});
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
	loop: true,
	nav: true,
	dots: false,
	autoplayHoverPause: true,
	autoplay: true,
	items: 1,
	animateOut: 'fadeOut',
	margin: 0,
	navText: [
		"<i class='bx bx-chevron-right'></i>",
	],
};
// TODO: image and video

const AboutUs = ({data}) => {
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, [])

	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<div className="about-area-three pb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className='home-1'>
								<img className='home-image-1' src="/img/about-petkar.jpg" alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							{/* <div className="social-area flex"> TODO: sosyal medya hesabı eklenecek
								<div className='mr-5'>
									<a href="https://www.facebook.com/people/Petkar-Koyunculuk/100076410344160//" target="_blank">
										<i className="bx bxl-facebook"></i>
									</a>
								</div>
								<div className='mr-5'>
									<a href="https://www.twitter.com/" target="_blank">
										<i className="bx bxl-twitter"></i>
									</a>
								</div>
								<div className='flex'>
									<a href="https://www.linkedin.com/" target="_blank">
										<i className="bx bxl-linkedin"></i>
									</a>
								</div>
								<div className='flex'>
									<a href="https://www.facebyoutubeook.com/" target="_blank">
										<i className="bx bxl-youtube"></i>
									</a>
								</div>
								<div>
									<a href="https://www.instagram.com/petkarkoyun/" target="_blank">
										<i className="bx bxl-instagram"></i>
									</a>
								</div>
							</div> */}
							<div className="about-content">

								{/* <p>Thank you for visiting our website, we hope that you will find the answers/information that you are seeking. If not, please do not hesitate to contact us through any of our social media sites, email us or use our ‘Chat Now’ service on this site, to ask us anything you wish.</p>
								<p>Something else you may find useful while researching the medical procedure you are interested in, is our Youtube vlog. In our vlog we answer questions, give further information, etc. on the medical services that we can assist you with.
								</p>
								<p>To assist you with your decision we can arrange for you to have a  video consultation with one of the medical specialists/surgeons that we work with (bariatric/sleeve; dental; eye; hair transplant; ıvf; botox; etc.). If you decide to avail yourself of this service you are under no obligation to book through us, and NO pressure will be placed upon you to do so – all we ask in return is that you speak well of us to others.</p>
								
								 */}
								
								 <div className='home-1'>
								 İle de France Koyunu Dünyadaki en iyi etçi koyun ırkları arasında bulunur. Her türlü mera ve iklim koşullarında yetiştirilmeye elverişlidir. Ile de France cins özelliği olarak et kalitesi ve et lezzeti ile öne çıkmaktadır. Karkas randımanı %55 in üstüne çıkabilir ve karkası yapı olarak yağsızdır								 </div>

								{/* <Link href="/about">
								<a className="default-btn">
									About Us
								</a>
							</Link> */}

								{/* <div
									onClick={e => { e.preventDefault(); openModal() }}
									className="video-btn popup-youtube"
								>
									<i className="flaticon-play-button-2"></i>
								</div> */}
							</div>
						</div>
						
						{/* <div className="col-lg-6">
							<div className="about-img">
								{display ? <OwlCarousel
									className="about-img-wrap owl-carousel owl-theme"
									{...options}
								>
									<div className="about-item">
										<img src="/img/anasayfa-kaydirmali-1.jpg" alt="Image" />
									</div>
									<div className="about-item">
										<img src="/img/anasayfa-kaydirmali-2.png" alt="Image" />
									</div>
								</OwlCarousel> : ''}

								<div className="shape-3">
									<img src="/img/about/about-shape-3.png" alt="Image" />
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			{/* <ModalVideo
				channel='youtube'
				isOpen={!isOpen}
				videoId='bk7McNUjWgw'
				onClose={() => setIsOpen(!isOpen)}
			/> */}
		</>
	)
}

export default AboutUs;
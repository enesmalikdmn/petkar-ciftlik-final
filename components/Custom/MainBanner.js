import React from 'react';
import Link from 'next/link';
import r from '../../utils/removeHTML';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:false,
    nav:false,
    mouseDrag: false,
    dots: false,
    autoplay: false, 
    autoplayHoverPause: true,
};

const MainBanner = ({data}) => {
    // Slider
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
            <div className="hero-slider-area">
                {display ? <OwlCarousel 
                    className="hero-slider-wrap owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="slider-item main-banner-bg">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text one">
                                                {/* <span className="top-title">Assessment Center &  Testing</span> */}
                                                <h1>Petkar Ile De France Damızlık Çiftliği</h1>
                                                {/* <p>
                                                    <div dangerouslySetInnerHTML={{__html: r(data?.content)}}></div>
                                                </p> */}
            
                                                {/* <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            {data.buttonText}
                                                        </a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                        // TODO: video buraya gelebilir
                                        {/* <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    
                </OwlCarousel> : ''}
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId={data.videoID}
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default MainBanner;
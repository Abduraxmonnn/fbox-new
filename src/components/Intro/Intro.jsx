import {useState, useRef} from "react";
import "./Intro.scss";
import {images, videos} from "../../constants/index.js";

const Intro = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !videoRef.current.muted;
    };

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="left-container intro-section">
            <div className="video-container">
                <video
                    ref={videoRef}
                    className="intro-video"
                    src={videos.video}
                    autoPlay
                    loop
                    muted={isMuted}
                />

                <div className="control-buttons">
                    <button className="video-btn" onClick={togglePlayPause}>
                        {isPlaying ? "⏸" : "▶️"}
                    </button>
                    <button className="video-btn" onClick={toggleMute}>
                        {isMuted ? "🔇" : "🔊"}
                    </button>
                </div>
            </div>

            {/* Partners Carousel */}
            <div className="partners">
                <div className="carousel">
                    <div className="carousel-track">
                        <img src={images.mato} alt="Mato" className="partner-logo"/>
                        <img src={images.okc} alt="OKC" className="partner-logo"/>
                        <img src={images.beta} alt="Beta" className="partner-logo"/>
                        <img src={images.bellissimo} alt="Bellissimo" className="partner-logo"/>
                        <img src={images.akfa} alt="Akfa" className="partner-logo"/>
                        <img src={images.angelsDrive} alt="Angels-Drive" className="partner-logo"/>
                        <img src={images.bon} alt="Bon" className="partner-logo"/>
                        <img src={images.savi} alt="Savi" className="partner-logo"/>
                        <img src={images.duty} alt="Duty" className="partner-logo"/>
                        <img src={images.hyatt} alt="Hyatt" className="partner-logo"/>
                        <img src={images.hyundai} alt="Hyundai" className="partner-logo"/>
                        <img src={images.lcwaikiki} alt="Lcwaikiki" className="partner-logo"/>
                        <img src={images.pharmaclick} alt="Pharma-Click" className="partner-logo"/>
                        <img src={images.poster} alt="Poster" className="partner-logo"/>
                        <img src={images.saxovat} alt="Saxovat" className="partner-logo"/>
                        <img src={images.uzCarlsberg} alt="Uz-Carlsberg" className="partner-logo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;

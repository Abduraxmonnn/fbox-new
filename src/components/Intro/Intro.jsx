import {images} from "../../constants/index.js";
import './Intro.scss';

const Intro = () => {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <img src={images.intro} alt="Intro Section" className="intro-image"/>
                <div className="intro-text">
                    <h1>IT Software Solution & Technology</h1>
                </div>
            </div>
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
                        <img src={images.boomCoffee} alt="Boom-Coffee" className="partner-logo"/>
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
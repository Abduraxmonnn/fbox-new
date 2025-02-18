import './About.scss';

const About = () => {
    return (
        <section className="left-container about-section">
            <div className="about-container">
                <div className="about-title">
                    <div className="about-line"/>
                    <span className="about-label">About</span>
                </div>
                <h2 className="about-heading">We’re More Than A Digital Agency</h2>
            </div>
            <div className="about-content">
                <div className="divider"/>
                <p className="about-description">
                    We are a dynamic team crafting top-notch digital products – Websites, AI products, and Apps – for
                    the global community.
                    With a focus on saving time and enhancing beauty, we turn websites into dreams. Quality and
                    exceptional support are our trademarks.
                </p>
            </div>
        </section>
    );
};

export default About;
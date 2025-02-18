import {images} from "../../constants/index.js";
import "./OurService.scss"

const services = [
    {
        id: 1,
        title: "Mobile App Development",
        description: "Раздельные блоки механизмов печати и автоотреза",
        icon: images.mobielIcon,
    },
    {
        id: 2,
        title: "Website Designing",
        description: "Трехцветная индикация состояния онлайн-кассы",
        icon: images.desktopIcon,
    },
    {
        id: 3,
        title: "AI & Blockchain",
        description: "Датчик окончания чековой ленты",
        icon: images.aiIcon,
    },
];

const OurService = () => {
    return (
        <section className="services-section">
            <div className="services-header">
                <div className="services-line"></div>
                <p className="services-label">Our Services</p>
            </div>
            <h2 className="section-title">Experience In Different Industries</h2>
            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.icon} alt={service.title} className="service-icon"/>
                        {/*<h3 className="service-title">{service.title}</h3>*/}
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurService;

import {images} from "../../constants/index.js";
import "./Testimonial.scss"
import StarRating from "../../utils/starRating/starRating.jsx";

const testimonials = [
    {
        name: "Jhon D.",
        role: "Bon",
        image: images.client1,
        text: "При работе с пациентами из разных слоев общества эффективная коммуникация имеет первостепенное значение. Приложение стало настоящей революцией в преобразовании моего способа общения с пациентами. Оно стало незаменимым инструментом в моей повседневной практике.",
        rating: 4.5,
    },
    {
        name: "Judy W.",
        role: "Hyatt Regency Tashkent",
        image: images.client2,
        text: "Преподавание онлайн представляет собой уникальные проблемы, но это приложение изменило мой способ общения со студентами по всему миру. По-настоящему инклюзивная среда обучения. Это делает уроки более интересными, и мои студенты ценят бесперебойный опыт.",
        rating: 4.5,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <div className="subtitle-container">
                <div className="line"></div>
                <span className="subtitle">Testimonials</span>
            </div>

            <h2 className="title">Что Говорят Пользователи</h2>

            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-header">
                            <img src={testimonial.image} alt={testimonial.name}/>
                            <div className="user-info">
                                <h3 className="name">{testimonial.name}</h3>
                                <p className="role">{testimonial.role}</p>
                            </div>
                            {/*<div className="social-icons">*/}
                            {/*    <span>🐦</span> /!* Twitter *!/*/}
                            {/*    <span>📘</span> /!* Facebook *!/*/}
                            {/*</div>*/}
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="rating">
                            <StarRating rating={testimonial.rating}/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cta-section">
                <div className="cta-text">
                    <h2>Станьте Нашим Партнером И Трансформируйте Свой Цифровой Мир.</h2>
                </div>
                <button className="cta-button">
                    <span className="cta-text">Присоединиться</span>
                    <span className="cta-arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;

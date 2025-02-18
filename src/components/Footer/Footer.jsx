import "./Footer.scss";
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contacts" className="footer">
            <div className="footer-container">
                {/* Left Side */}
                <div className="footer-left">
                    <p className="footer-text">
                        Ускорьте свои проекты с помощью тысяч готовых к использованию продуктов.
                    </p>
                    <button className="footer-button">
                        Получить предложение <span className="arrow">→</span>
                    </button>
                </div>

                {/* Right Side */}
                <div className="footer-right">
                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Быстрые ссылки</h3>
                        <ul>
                            <li><a href="#">Связаться с нами</a></li>
                            <li><a href="#">Продукция</a></li>
                            <li><a href="#">Политика конф.</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact</h3>
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Поддержка</a></li>
                        </ul>
                        {/* Social Icons */}
                        <div className="social-icons">
                            <FaFacebookF/>
                            <FaInstagram/>
                            <FaYoutube/>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="footer-bottom">
                Copyright {currentYear}. <span className="highlight">Made by FiscalBOX</span>
            </div>
        </footer>
    );
};

export default Footer;

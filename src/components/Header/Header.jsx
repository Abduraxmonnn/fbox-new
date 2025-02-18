import {images} from '../../constants';
import './Header.scss';

const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <header className='left-container'>
            <div className='header'>
                <div className='header-logo'>
                    <img src={images.logo || "/placeholder.svg"} alt='logo' className="header-logo__content"/>
                    <span>FiscalBOX</span>
                </div>

                <ul className='header-links'>
                    <li onClick={() => scrollToSection('main')}>Main</li>
                    <li onClick={() => scrollToSection('services')}>Our Services</li>
                    <li onClick={() => scrollToSection('work-counters')}>Work Counters</li>
                    <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
                    <li onClick={() => scrollToSection('contacts')}>Contacts</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
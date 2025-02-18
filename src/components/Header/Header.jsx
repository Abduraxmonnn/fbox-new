import './Header.scss';
import {images} from '../../constants';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    return (
        <header className='left-container'>
            <div className='header'>
                <div className='header-logo'>
                    <img src={images.logo || "/placeholder.svg"} alt='logo' className="header-logo__content"/>
                    <span>FiscalBOX</span>
                </div>

                <ul className='header-links'>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
// Project
import Header from '../../components/header/Header'
import Intro from "../../components/Intro/Intro.jsx";
import About from "../../components/About/About.jsx";
import OurService from "../../components/OurService/OurService.jsx";
import Numbers from "../../components/Numbers/Numbers.jsx";
import Testimonials from "../../components/Testimonial/Testimonial.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <Intro/>
            <About/>
            <OurService/>
            <Numbers/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Home

import './Numbers.scss'; // Import the SCSS file

const Numbers = () => {
    return (
        <section id="work-counters" className="numbers-section">
            <div className="subtitle-container">
                <span className="line"></span>
                <p className="subtitle">Work Counters</p>
            </div>
            <h2 className="title">Мы Гордимся Нашими Работами</h2>
            <div className="numbers-container">
                <div className="number-item left">
                    <h3 className="number">1.5</h3>
                    <p className="label">млн отрезов</p>
                </div>
                <div className="number-item center">
                    <h3 className="number">200</h3>
                    <p className="label">мм/с скорость</p>
                </div>
                <div className="number-item right">
                    <h3 className="number">150</h3>
                    <p className="label">км ресурс</p>
                </div>
            </div>
        </section>
    );
};

export default Numbers;
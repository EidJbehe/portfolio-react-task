import portfolioImg1 from '../../images/portfolioImg1.png'
import portfolioImg2 from '../../images/portfolioImg2.png'
import portfolioImg3 from '../../images/portfolioImg3.png'
import portfolioImg4 from '../../images/portfolioImg4.png'
import portfolioImg5 from '../../images/portfolioImg5.png'
import portfolioImg6 from '../../images/portfolioImg6.png'
import style from './portfolio.module.css'
function Portfolio() {
    return <>
        <div className="text-center my-5">
            <h2 className={`${style.portfolio_title} mb-4`}>PORTFOLIO</h2>

            <div className="container">
                <div className="row justify-content-center g-4">
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg1} alt="Portfolio 1" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg2} alt="Portfolio 2" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg3} alt="Portfolio 3" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg4} alt="Portfolio 4" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg5} alt="Portfolio 5" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src={portfolioImg6} alt="Portfolio 6" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Portfolio
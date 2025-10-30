import style from './footer.module.css'
function Footer() {

    return <>
        <footer  >
            <div className={`${style.footerTop} row g-3 `}>
            <div className="col-3 offset-1"><div className="location d-flex justify-content-center align-items-center flex-column">

                <h4 className='fw-700 fs-3 mb-3' >Location</h4>
                <p>22215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            </div>

            <div className="col-3"><div className=" d-flex justify-content-center align-items-center flex-column">

                <h4 className={`${style.sitesTitle} fw-700 fs-3`}>AROUND THE WEB </h4>
                <div className=" d-flex justify-content-center align-items-center gap-3 ">
                    <i className="bi bi-facebook px-2 py-1 border rounded-circle"></i>
                    <i className="bi bi-twitter px-2 py-1 border rounded-circle"></i>
                    <i className="bi bi-linkedin px-2 py-1 border rounded-circle"></i>
                    <i className="bi bi-dribbble px-2 py-1 border rounded-circle"></i>
                </div>
            </div>
            </div>
                <div className="col-3">
                    <div className=" d-flex justify-content-center align-items-center flex-column">

                    <h4 className='fw-700 fs-3 mb-3'>ABOUT FREELANCER</h4>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a  className={`${style.siteLink}`}  href="">Start Bootstrap</a> .</p>
                    
                </div>
                </div>
                </div>
                <div className={`${style.footerBootom} `}>
                    <p>Copyright © Your Website 2023</p>
                </div>
         


                </footer>

            </>

}
            export default Footer;
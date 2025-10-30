import style from "./about.module.css";
function About() {
  return (
    <>
      <div className={`${style.about_section} p-4`}>
        <h2 className="text-center pb-4 text-white ">ABOUT</h2>
        <div className="row p-5  g-5">
          <p className="col-4 offset-2 ">
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-4 ">
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
          <div className="d-flex justify-content-center align-items-center ">  <button className="btn btn-outline-light px-3 py-2 fw-bold">
            <i className="bi bi-download p-2"></i>
            Free Download!
          </button></div>

        </div>
      </div>
    </>
  );
}
export default About;

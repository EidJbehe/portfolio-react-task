import style from "./navbar.module.css";
function Navbar() {
  return (
    <>
      <nav
        className={`${style.navbar} d-flex justify-content-around align-items-center py-3  `}
      >
        <div className="logo d-flex justify-content-center align-items-center p-2">
          <h2 className=" text-white text-center fs-3"> Start Bootstrap</h2>
        </div>
        <div>
          <ul className="nav-links d-flex list-unstyled mb-0 justify-content-end align-items-center flex-fill gap-5  ">
            <li>
              <a href="#" className="text-decoration-none text-white ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

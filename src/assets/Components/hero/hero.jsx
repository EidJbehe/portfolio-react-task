import style from "./hero.module.css";
import heroImage from "../../images/hero.svg";

function Hero() {
  return (
    <>
      <div
        className={`${style.hero} d-flex justify-content-center align-items-center flex-column p-5 gap-4 `}
      >
        <img
          src={heroImage}
          className={`${style.heroImage} d-flex justify-content-center align-items-center p-3 `}
        ></img>
        <h2>Start Bootstrap</h2>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
export default Hero;

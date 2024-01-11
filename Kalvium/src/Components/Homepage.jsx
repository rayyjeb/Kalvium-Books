import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Homepage = () => {
  // SCROLL FEATURE FUNCTION
  const scrollToBooks = () => {
    scroller.scrollTo("booksSection", {
      duration: 50,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="homepageMain">
      <section className="HomePageSection" id="homeSection">
        {/* NAVBAR SECTION */}
        <nav>
          <div className="MainParentDiv">
            <div className="ParentDiv">
              <div>
                <img
                  className="LogoHomeDiv"
                  src="https://i.ibb.co/nD3yW7j/kalvibookslogo.png"
                />
              </div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h3 className="navLinks" style={{ color: "#ffa800" }}>
                  HOME
                </h3>
              </Link>
              <h3 className="navLinks" onClick={scrollToBooks}>
                BOOKS
              </h3>
              <a
                href="https://rayyjeb.github.io/Portfolio/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <h3 className="navLinks">ABOUT</h3>
              </a>
              <div className="registerBtnMain">
                <Link to="/register">
                  <button className="registerBtn">REGISTER</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* HERO SECTION */}
        <div className="welcomeText">
          <h2>Kalvium Books</h2>
          <div className="welcomTextFlex">
            <h1>
              Unlimited <span id="booksText">Books</span>
            </h1>
          </div>
          <p className="subTexts">Audio Books, Novels, Podcasts, etc..</p>
          <div className="exploreBtn">
            <button className="btnText" onClick={scrollToBooks}>
              EXPLORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

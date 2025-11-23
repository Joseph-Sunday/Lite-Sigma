import "../css/App.css";
import "../css/Home.css";
import "../css/Navbar.css";
import ScrollRight from "./ScrollRight";
import ScrollLeft from "./ScrollLeft";

const MainSection = () => {
  return (
    <>
      <main className="main-section">
        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">DIGITAL MARKETING & CONSULTING.</h1>
              <p className="text-center navbar-li-text">
                We design innovative, data driven campaings that deliver
                measurable results 100% of the time. <br /> Our connsulting goes
                beyond marketing, we audit your IT systems, identify gaps, and
                implement solutions that ensure long-term stability. With a
                focus on security, growth and human develpoment, we help
                businesses scale with confidence.
              </p>
            </div>
          </ScrollLeft>

          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/DM&C.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-rt"
              />
            </div>
          </ScrollRight>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/S&A.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-lt"
              />
            </div>
          </ScrollRight>

          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">SOFTWARE DEVELOPMENT & AI.</h1>
              <p className="text-center navbar-li-text">
                We build and manage secure, high-performance software from
                custom applications and system integrations to AI-powered
                solutions that turn data into smarter decisions. Our SaaS
                platforms scale effortlessly for B2B, B2C, and B2B2C models,
                giving your business the flexibility, security, and reliability
                to grow with confidence.
              </p>
            </div>
          </ScrollLeft>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">PAYMENTS.</h1>
              <p className="text-center navbar-li-text">
                We simplify payments for businesses of all sizes with secure,
                reliable solutions. From Direct Carrier Billing (DCB) to
                advanced payments API integration and direct bank payments, our
                platforms are built to process transactions seamlessly. We help
                you improve customer experience, reduce friction, and keep your
                financial operations running efficiently.
              </p>
            </div>
          </ScrollLeft>

          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/payments.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-rt"
              />
            </div>
          </ScrollRight>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/IT&S.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-lt"
              />
            </div>
          </ScrollRight>

          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">IT AS A SERVICE.</h1>
              <p className="text-center navbar-li-text">
                We act as your strategic IT partner designing, building, and
                managing technology solutions for companies without in-house
                expertise. While you focus on growing your business, we handle
                everything IT: from product development to ongoing support and
                innovation.
              </p>
            </div>
          </ScrollLeft>
        </div>

        <section className="section-core-values">
          <div className="section-core-values-first-child">
            <h1 className="text-center">OUR CORE VALUES.</h1>
            <p className="navbar-li-text text-center">
              Driving innovation, empowering growths and delivering real
              results.
            </p>
          </div>
          <div className="section-core-values-cards mt-5 d-flex justify-content-center align-items-center flex-column gap-4">
            <div className="card section-core-values-cards-card">
              <h1 className="card-title">INNOVATION.</h1>
              <p className="card-texts">
                We power businesses with relentless innovation in technologies,
                approaches, and processes to stay ahead of the curve.
              </p>
            </div>
            <div className="card section-core-values-cards-card">
              <h1 className="card-title">EXCELLENCE.</h1>
              <p className="card-texts">
                We never settle. We continually improve to ensure our clients
                get the best possible service and the most effective solutions.
              </p>
            </div>
            <div className="card section-core-values-cards-card">
              <h1 className="card-title">IMPACT.</h1>
              <p className="card-texts">
                We create positive impact by helping businesses grow
                sustainably. Through data-driven insights and smart strategies,
                we ensure that every step we take delivers measurable value and
                long-term success.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSection;

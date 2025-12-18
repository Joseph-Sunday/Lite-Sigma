import "../css/App.css";
import "../css/Home.css";
import "../css/Navbar.css";
import ScrollRight from "./ScrollRight";
import ScrollLeft from "./ScrollLeft";
import ScrollUp from "./ScrollUp";
import TextOpacity from "./TextOpacity";
import TextScrollUp from "./TextScrollUp";
import Transform from "./Transform";

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
            <ScrollUp>
              <h1 className="text-center">OUR CORE VALUES.</h1>
            </ScrollUp>

            <TextOpacity>
              <p className="navbar-li-text text-center">
                Driving innovation, empowering growths and delivering real
                results.
              </p>
            </TextOpacity>
          </div>
          <div className="section-core-values-cards mt-5">
            <div className="card section-core-values-cards-card">
              <ScrollUp>
                <h1 className="card-title">INNOVATION.</h1>
              </ScrollUp>

              <TextOpacity>
                <p className="card-texts navbar-li-text">
                  We power businesses with relentless innovation in
                  technologies, approaches, and processes to stay ahead of the
                  curve.
                </p>
              </TextOpacity>
            </div>
            <div className="card section-core-values-cards-card">
              <ScrollUp>
                <h1 className="card-title">EXCELLENCE.</h1>
              </ScrollUp>

              <TextOpacity>
                <p className="card-texts">
                  We never settle. We continually improve to ensure our clients
                  get the best possible service and the most effective
                  solutions.
                </p>
              </TextOpacity>
            </div>
            <div className="card section-core-values-cards-card">
              <ScrollUp>
                <h1 className="card-title">IMPACT.</h1>
              </ScrollUp>

              <TextOpacity>
                <p className="card-texts">
                  We create positive impact by helping businesses grow
                  sustainably. Through data-driven insights and smart
                  strategies, we ensure that every step we take delivers
                  measurable value and long-term success.
                </p>
              </TextOpacity>
            </div>
          </div>
        </section>

        <section className="main-section-saas">
          <div className="main-section-saas-head">
            <h1 className="text-center">
              WE CREATE
              <span className="main-section-saas-orange">
                {" "}
                SAAS APPLICATION
              </span>{" "}
              THAT SCALE.
            </h1>
            <p className="text-center navbar-li-text">
              Powerful. Flexible. Built for businesses end-users alike
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4 flex-column mt-7 main-section-saas-flex-container">
            <div className="main-section-saas-card">
              <ScrollUp>
                <h1>B2B</h1>
              </ScrollUp>

              <TextScrollUp>
                <p className=" py-1 navbar-li-text">
                  From SMS, USSD, Web, to Mobile Apps. We build applications
                  that solve critical business problems and drive organizational
                  growth.
                </p>
              </TextScrollUp>
              <Transform>
                <img src="/B2B.png" alt="B2B" />
              </Transform>
            </div>
            <div className="main-section-saas-card">
              <ScrollUp>
                <h1>B2B2BC</h1>
              </ScrollUp>

              <TextScrollUp>
                <p className="py-1 navbar-li-text">
                  We combine channels intelligently to maximize business value
                  while delivering seamless experiences for end-users.
                </p>
              </TextScrollUp>

              <Transform>
                <img src="/B2B2BC.png" alt="B2B2BC" />
              </Transform>
            </div>
          </div>
        </section>

        <section className="main-section-our-partners">
          <div className="main-section-our-partners-head text-center">
            <h1>OUR PARTNERS</h1>
            <p className="text-center navbar-li-text">
              TRUSTED BY LEADING BRANDS ACROSS INDUSTRIES
            </p>
          </div>
          <div className="main-section-our-partners-logo-container row g-3">
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/Mtn.png" className="logo" alt="MTN" />
            </div>
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/Airtel.png" className="logo mt-3" alt="Airtel" />
            </div>
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/9mobile.jpg" className="logo mt-3" alt="9Mobile" />
            </div>
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/FGMB.png" className="logo mt-3" alt="FGMB" />
            </div>
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/Easplay.webp" className="logo mt-3" alt="Easplay" />
            </div>
            <div className="partner-logo-wrapper col-12 col-md-3 col-xl-2">
              <img src="/ASO.png" className="logo mt-3" alt="ASO Logo" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSection;

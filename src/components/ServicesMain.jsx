import "../css/App.css";
import "../css/Home.css";
import "../css/NavBar.css";
import ScrollRight from "./ScrollRight";
import ScrollLeft from "./ScrollLeft";

const ServicesMain = () => {
  return (
    <>
      <main className="main-section">
        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">DIGITAL MARKETING</h1>
              <p className="text-center navbar-li-text">
                We deliver innovative, data-driven campaigns that accelerate
                customer acquisition and retention. Beyond marketing, our
                consulting audits IT systems, identifies growth gaps, and
                implements secure, long-term solutions that scale with your
                business.
              </p>
            </div>
          </ScrollLeft>

          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/DM.png"
                alt="Digital Marketing"
                className="main-section-wrapper-poster m-rt"
              />
            </div>
          </ScrollRight>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/SD&AI.png"
                alt="Software Develpment and AI"
                className="main-section-wrapper-poster m-lt"
              />
            </div>
          </ScrollRight>

          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">SOFTWARE DEVELOPMENT & AI</h1>
              <p className="text-center navbar-li-text">
                From web and mobile applications to enterprise platforms, we
                build secure, high-performance software. Our AI solutions
                transform raw data into actionable intelligence, powering
                smarter, more resilient business outcomes.
              </p>
            </div>
          </ScrollLeft>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">PAYMENT SOLUTIONS</h1>
              <p className="text-center navbar-li-text">
                We simplify transactions with robust infrastructure supporting
                Direct Carrier Billing, APIs, bank integrations, and card
                payments. Our systems focus on security, fraud prevention, and
                high-availability processing to improve customer experience and
                trust.
              </p>
            </div>
          </ScrollLeft>

          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/PS.png"
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
                src="/ITS.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-lt"
              />
            </div>
          </ScrollRight>

          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">IT AS A SERVICE.</h1>
              <p className="text-center navbar-li-text">
                We act as your dedicated technology partner, managing
                infrastructure, cloud hosting, monitoring, and security
                compliance. With ITaaS, your business gains enterprise-grade
                reliability while you focus on growth and innovation.
              </p>
            </div>
          </ScrollLeft>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5">
          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">SAAS PLATFORMS</h1>
              <p className="text-center navbar-li-text">
                We design and operate subscription-native platforms that are
                secure, scalable, and extensible. From billing engines to
                API-driven integrations, our SaaS solutions empower businesses
                to scale seamlessly across B2B and B2C markets.
              </p>
            </div>
          </ScrollLeft>

          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/IT&S.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-rt"
              />
            </div>
          </ScrollRight>
        </div>

        <div className="container-fluid px-lg-4 main-section-wrapper d-lg-flex justify-content-center align-items-center gap-5 mb-3">
          <ScrollRight>
            <div className="d-none d-lg-block">
              <img
                src="/consulting.png"
                alt="Digital Marketing and consulting"
                className="main-section-wrapper-poster m-lt"
              />
            </div>
          </ScrollRight>

          <ScrollLeft>
            <div className="main-section-container">
              <h1 className="text-center">CONSULTING</h1>
              <p className="text-center navbar-li-text">
                Our experts help businesses adopt cutting-edge technologies
                while upskilling teams. We design training and consulting
                programs focused on digital transformation, innovation, and
                workforce enablement for sustainable growth.
              </p>
            </div>
          </ScrollLeft>
        </div>
      </main>
    </>
  );
};

export default ServicesMain;

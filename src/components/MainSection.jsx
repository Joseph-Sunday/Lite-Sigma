import "../css/App.css";
import "../css/Home.css";
import "../css/Navbar.css";

const MainSection = () => {
  return (
    <>
      <main className="container-fluid main-section">
        <div className="container-fluid main-section-wrapper">
          <div className="main-section-container">
            <h1 className="text-center">DIGITAL MARKETING & CONSULTING.</h1>
            <p className="text-center navbar-li-text">
              We design innovative, data driven campaings that deliver
              measurable results 100% of the time. <br /> Our connsulting goes
              beyond marketing, we audit your IT systems, identify gaps, and
              implement solutions that ensure long-term stability. With a focus
              on security, growth and human develpoment, we help businesses
              scale with confidence.
            </p>
          </div>
          <div className="d-none">
            <img src="/DM&C.png" alt="Digital Marketing and consulting" />
          </div>
        </div>

        <div className="container-fluid main-section-wrapper">
          <div className="main-section-container">
            <h1 className="text-center">SOFTWARE DEVELOPMENT & AI.</h1>
            <p className="text-center navbar-li-text">
              We build and manage secure, high-performance software from custom
              applications and system integrations to AI-powered solutions that
              turn data into smarter decisions. Our SaaS platforms scale
              effortlessly for B2B, B2C, and B2B2C models, giving your business
              the flexibility, security, and reliability to grow with
              confidence.
            </p>
          </div>
          <div className="d-none">
            <img src="/DM&C.png" alt="Digital Marketing and consulting" />
          </div>
        </div>

        <div className="container-fluid main-section-wrapper">
          <div className="main-section-container">
            <h1 className="text-center">PAYMENTS.</h1>
            <p className="text-center navbar-li-text">
              We simplify payments for businesses of all sizes with secure,
              reliable solutions. From Direct Carrier Billing (DCB) to advanced
              payments API integration and direct bank payments, our platforms
              are built to process transactions seamlessly. We help you improve
              customer experience, reduce friction, and keep your financial
              operations running efficiently.
            </p>
          </div>
          <div className="d-none">
            <img src="/DM&C.png" alt="Digital Marketing and consulting" />
          </div>
        </div>

        <div className="container-fluid main-section-wrapper">
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
          <div className="d-none">
            <img src="/DM&C.png" alt="Digital Marketing and consulting" />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;

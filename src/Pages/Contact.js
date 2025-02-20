import React from 'react';
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Section: Website Developers */}
      <section className="contact-section">
        <h1 className="section-heading">Website Developers</h1>
        <div className="cards-container">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/AsifImage.jpg'}
              alt="Asif Pathan"
              className="card-image"
            />
            <div className="card-info">
              <h2>Asif Pathan</h2>
              <p>Ethical Hacker</p>
              <p>ECE, BITS Vizag</p>
              <p>
                Contact: <br />
                asif6302104@gmail.com
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={process.env.PUBLIC_URL + 'https://res.cloudinary.com/dkuriblkh/image/upload/v1735800751/dh6fzc9rtvfvknxqryyw.jpg'}
              alt="Mahesh Devu"
              className="card-image"
            />
            <div className="card-info">
              <h2>Mahesh Devu</h2>
              <p>MeT, JNTUGV</p>
              <p>Full-Stack Web Developer</p>
              <p>
                Contact: <br />
                maheshdevu17@gmail.com <br />
                Ph.no: +91-9493167399
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/VivekDevarakonda.jpg'}
              alt="Vivek Devarakonda"
              className="card-image"
            />
            <div className="card-info">
              <h2>Vivek Devarakonda</h2>
              <p>MeT, JNTUGV</p>
              <p>Full-Stack Web Developer</p>
              <p>
                Contact: <br />
                vivekdevarakonda123@gmail.com <br />
                Ph.no: +91-9441008408
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Section: Eisen - 2k24 Batch */}
      <section className="contact-section">
        <h1 className="section-heading">Eisen - 2k24 Batch</h1>
        <img
          src={process.env.PUBLIC_URL + '/dept-1.jpg'}
          alt="Department Students"
          className="dept-image"
        />
        <h2 className="section-heading thank-you-heading">
          Thank you each and every student of the Metallurgy Department.
          <br />
          Thanks once again ❤️ for visiting us!
        </h2>
      </section>
    </div>
  );
}

export default Contact;

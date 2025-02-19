import React from 'react';

function Contact() {
  return (
    <>
      <div className="events-container">
        {/* Section 1: Website Developers */}
        <div className="section">
          <h1>Website Developers</h1>
          <div className="cards-container">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + '/AsifImage.jpg'}
                alt="Asif Pathan"
              />
              <div className="card-info">
                <h2>Asif Pathan</h2>
                <p>Ethical Hacker</p>
                <p>ECE, BITS Vizag</p>
                <p>
                  Contact: 
                  <br />
                  asif6302104@gmail.com
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src={process.env.PUBLIC_URL + 'https://res.cloudinary.com/dkuriblkh/image/upload/v1735800751/dh6fzc9rtvfvknxqryyw.jpg'}
                alt="mahesh devu"
              />
              <div className="card-info">
                <h2>Mahesh Devu</h2>
                <p>MeT, JNTUGV</p>
                <p>Full-Stack Web Developer</p>
                <p>
                  Contact: 
                  <br />
                  maheshdevu17@gmail.com
                  <br />
                  Ph.no: +91-9493167399
                </p>
              </div>
            </div>


            <div className="card">
              <img
                src={process.env.PUBLIC_URL + '/VivekDevarakonda.jpg'}
                alt="Vivek Devarakonda"
              />
              <div className="card-info">
                <h2>Vivek Devarakonda</h2>
                <p>MeT, JNTUGV</p>
                <p>Full-Stack Web Developer</p>
                <p>
                  Contact: 
                  vivekdevarakonda123@gmail.com
                  <br />
                  Ph.no: +91-9441008408
                </p>
              </div>
            </div>
           
          </div>
          <hr />
          <br />

          <h1>Eisen - 2k24 Batch</h1>
          <img
            src={process.env.PUBLIC_URL + '/dept-1.jpg'}
            alt="department-students"
            className="dept-image"
          />
          <h1>
            Thank you each and every student of the Metallurgy Department.
            <br />
            <br />
            Thanks once again ❤️ for visiting us!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Contact;
